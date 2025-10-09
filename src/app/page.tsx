import { redirect } from 'next/navigation';

import { APP_ROUTES } from '@/common/types/app.routes';

export default function Home() {
  redirect(APP_ROUTES.STOPWATCH);
}
