import { Analytics } from '@vercel/analytics/next';
import classNames from 'classnames';
import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

import { montserratFonts, russoOneFonts } from '@/../public/fonts/fonts';
import '@/common/styles/globals.scss';
import Footer from '@/components/Footer/Footer';
import MainHeader from '@/components/MainHeader/MainHeader';
import { AppProviders } from '@/contexts/AppProviders';

export const metadata: Metadata = {
  title: 'Stopwatch App',
  description: 'A simple stopwatch application built with Next.js',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={classNames(russoOneFonts.variable, montserratFonts.variable)}
      >
        <Analytics />
        <AppProviders>
          <MainHeader />
          <main>{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
