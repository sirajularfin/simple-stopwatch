import logger from './logger.util';

class StorageUtil {
  private static instance: StorageUtil;

  private constructor() {}

  private get isBrowser() {
    return (
      typeof window !== 'undefined' &&
      typeof window.localStorage !== 'undefined'
    );
  }

  get loadItemFromStorage() {
    return (key: string): string | null => {
      if (!this.isBrowser) {
        logger(`[LocalStorage] Skipped get (SSR): ${key}`);
        return null;
      }
      try {
        return window.localStorage.getItem(key);
      } catch (error) {
        logger(`[LocalStorage] Error getting item: ${key}\n${error}`, 'error');
        return null;
      }
    };
  }

  get saveToLocalStorage() {
    return (key: string, value: string): void => {
      if (!this.isBrowser) {
        logger(`[LocalStorage] Skipped set (SSR): ${key}`);
        return;
      }
      try {
        const item = this.loadItemFromStorage(key);
        if (item) {
          try {
            const parsedNewValue = JSON.parse(value);
            const parsedExistingItem = JSON.parse(item);
            const data = JSON.stringify({
              ...parsedExistingItem,
              ...parsedNewValue,
            });
            window.localStorage.setItem(key, data);
            return;
          } catch {
            window.localStorage.setItem(key, value);
            return;
          }
        }
        window.localStorage.setItem(key, value);
      } catch {
        logger('[LocalStorage] Error setting item', 'error');
      }
    };
  }

  get overrideStorageItem() {
    return (key: string, value: string): void => {
      if (!this.isBrowser) {
        logger(`[LocalStorage] Skipped override (SSR): ${key}`);
        return;
      }
      try {
        window.localStorage.setItem(key, value);
      } catch {
        logger('[LocalStorage] Error overriding item', 'error');
      }
    };
  }

  get removeStorageItem() {
    return (key: string): void => {
      if (!this.isBrowser) return;
      try {
        window.localStorage.removeItem(key);
      } catch {
        logger('[LocalStorage] Error removing item', 'error');
      }
    };
  }

  get resetStorage() {
    return (): void => {
      if (!this.isBrowser) return;
      try {
        window.localStorage.clear();
      } catch {
        logger('[LocalStorage] Error resetting storage', 'error');
      }
    };
  }

  static getInstance(): StorageUtil {
    if (!StorageUtil.instance) {
      StorageUtil.instance = new StorageUtil();
    }
    return StorageUtil.instance;
  }
}

export const {
  loadItemFromStorage,
  saveToLocalStorage,
  removeStorageItem,
  resetStorage,
  overrideStorageItem,
} = StorageUtil.getInstance();
