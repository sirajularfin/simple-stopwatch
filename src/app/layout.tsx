import classNames from 'classnames';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { cookies } from 'next/headers';

import { montserratFonts, russoOneFonts } from '@/../public/fonts/fonts';
import '@/common/styles/globals.scss';
import { APP_LANGUAGES } from '@/common/types/constants';
import MainHeader from '@/components/MainHeader/MainHeader';
import LocalizationProvider from '@/i18n/LocalizationProvider';

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
	const cookieStore = await cookies();
	const cookieLocale = cookieStore.get('locale')?.value as APP_LANGUAGES;
	const initialLocale =
		cookieLocale && Object.values(APP_LANGUAGES).includes(cookieLocale) ? cookieLocale : APP_LANGUAGES.EN;

	return (
		<html lang={locale}>
			<body className={classNames(russoOneFonts.variable, montserratFonts.variable)}>
				<LocalizationProvider initialLocale={initialLocale}>
					<NextIntlClientProvider locale={locale}>
						<MainHeader />
						<main>{children}</main>
					</NextIntlClientProvider>
				</LocalizationProvider>
			</body>
		</html>
	);
}
