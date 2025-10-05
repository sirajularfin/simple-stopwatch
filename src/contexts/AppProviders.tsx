import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import React from 'react';

import { APP_LANGUAGES } from '@/common/types/constants';
import LocalizationProvider from '@/i18n/LocalizationProvider';
import { StopwatchProvider } from './stopwatch/StopwatchProvider';
import { TimerProvider } from './timer/TimerProvider';

export const AppProviders: React.FC<React.PropsWithChildren> = async ({
  children,
}) => {
  const locale = await getLocale();
  const cookieStore = await cookies();
  const cookieLocale = cookieStore.get('locale')?.value as APP_LANGUAGES;
  const initialLocale =
    cookieLocale && Object.values(APP_LANGUAGES).includes(cookieLocale)
      ? cookieLocale
      : APP_LANGUAGES.EN;

  return (
    <LocalizationProvider initialLocale={initialLocale}>
      <NextIntlClientProvider locale={locale}>
        <StopwatchProvider>
          <TimerProvider>{children}</TimerProvider>
        </StopwatchProvider>
      </NextIntlClientProvider>
    </LocalizationProvider>
  );
};
