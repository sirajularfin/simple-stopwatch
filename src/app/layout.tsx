import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { cookies } from 'next/headers';

import '@/common/styles/globals.scss';
import { APP_LANGUAGES } from '@/common/types/constants';
import LocalizationProvider from '@/i18n/LocalizationProvider';
import customFonts from '../../public/fonts/fonts';

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
			<body className={customFonts.className}>
				<LocalizationProvider initialLocale={initialLocale}>
					<NextIntlClientProvider locale={locale}>
						<main>{children}</main>
					</NextIntlClientProvider>
				</LocalizationProvider>
			</body>
		</html>
	);
}
