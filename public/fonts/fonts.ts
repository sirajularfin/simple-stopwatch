import localFont from 'next/font/local';

const russoOneFonts = localFont({
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

const montserratFonts = localFont({
  display: 'swap',
  variable: '--font-montserrat',
  src: [
    {
      path: './Montserrat-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Montserrat-ThinItalic.ttf',
      weight: '100',
      style: 'italic',
    },
    {
      path: './Montserrat-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Montserrat-ExtraLightItalic.ttf',
      weight: '200',
      style: 'italic',
    },
    {
      path: './Montserrat-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Montserrat-LightItalic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './Montserrat-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Montserrat-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Montserrat-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Montserrat-MediumItalic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './Montserrat-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Montserrat-SemiBoldItalic.ttf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './Montserrat-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Montserrat-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './Montserrat-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Montserrat-ExtraBoldItalic.ttf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './Montserrat-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './Montserrat-BlackItalic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
});

export { montserratFonts, russoOneFonts };
