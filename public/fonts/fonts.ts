import localFont from 'next/font/local';

const customFonts = localFont({
	display: 'swap',
	variable: '--font-russo-one',
	src: [
		{
			path: './RussoOne-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
	],
});

export default customFonts;
