import logger from './logger.util';

class StorageUtil {
	private static instance: StorageUtil;

	private constructor() {
		// Private constructor to prevent direct instantiation
	}

	get loadItemFromStorage() {
		return (key: string): string | null => {
			try {
				return localStorage.getItem(key);
			} catch {
				logger('[LocalStorage] Error getting item', 'error');
				return null;
			}
		};
	}

	get saveToLocalStorage() {
		return (key: string, value: string): void => {
			try {
				localStorage.setItem(key, value);
			} catch {
				logger('[LocalStorage] Error setting item', 'error');
			}
		};
	}

	get removeStorageItem() {
		return (key: string): void => {
			try {
				localStorage.removeItem(key);
			} catch {
				logger('[LocalStorage] Error removing item', 'error');
			}
		};
	}

	get resetStorage() {
		return (): void => {
			try {
				localStorage.clear();
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

export const { loadItemFromStorage, saveToLocalStorage, removeStorageItem, resetStorage } = StorageUtil.getInstance();
