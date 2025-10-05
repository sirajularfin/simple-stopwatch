import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';

import { APP_LANGUAGES } from '@/common/types/constants';

const resources: Record<APP_LANGUAGES, () => Promise<Record<string, unknown>>> =
  {
    [APP_LANGUAGES.EN]: () =>
      import('@/translations/en.json').then(m => m.default),
  };

export default getRequestConfig(async () => {
	const cookieStore = await cookies();
	const lang = (cookieStore.get('locale')?.value as APP_LANGUAGES) || APP_LANGUAGES.EN;

	const messagesLoader = resources[lang] || resources[APP_LANGUAGES.EN];
	const messages = await messagesLoader();

	return {
		locale: lang,
		messages,
	};
});
