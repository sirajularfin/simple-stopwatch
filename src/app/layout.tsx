import type { Metadata } from 'next';

import '@/common/styles/globals.scss';
import customFonts from '../../public/fonts/fonts';

export const metadata: Metadata = {
	title: 'Stopwatch App',
	description: 'A simple stopwatch application built with Next.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={customFonts.className}>
				<main>{children}</main>
			</body>
		</html>
	);
}
