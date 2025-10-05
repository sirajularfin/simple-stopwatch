'use client';

import { useRouter } from 'next/navigation';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { APP_LANGUAGES } from '@/common/types/constants';

interface LocaleContextType {
  locale: APP_LANGUAGES;
  toggleLanguage: () => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: APP_LANGUAGES.EN,
  toggleLanguage: () => {},
});

interface LocalizationWrapperProps {
  children: React.ReactNode;
  initialLocale: APP_LANGUAGES;
}

const COOKIE_EXPIRATION_TIME = 60 * 60 * 24 * 365; // 1 year

const LocalizationProvider: React.FC<LocalizationWrapperProps> = ({
  children,
  initialLocale,
}) => {
  const router = useRouter();
  const [locale, setLocale] = useState<APP_LANGUAGES>(initialLocale);

  const toggleLanguage = useCallback(() => {
    const newLocale = APP_LANGUAGES.EN;

    document.cookie = `locale=${newLocale}; path=/; max-age=${COOKIE_EXPIRATION_TIME}`;

    setLocale(newLocale);
    router.refresh();
  }, [router]);

  const contextValue = useMemo(
    () => ({ locale, toggleLanguage }),
    [locale, toggleLanguage]
  );

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = (): LocaleContextType => {
  return useContext(LocaleContext);
};

export default LocalizationProvider;
