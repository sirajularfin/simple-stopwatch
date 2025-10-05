import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import React from 'react';

import { APP_ROUTES } from '@/common/types/app.routes';
import Typography from '../Typography/Typography';
import classes from './style.module.scss';

const HEADER_NAVIGATION_LINKS = [
  { href: APP_ROUTES.STOPWATCH, labelKey: 'stopwatch' },
  { href: APP_ROUTES.TIMER, labelKey: 'timer' },
];

const MainHeader: React.FC = async () => {
  const t = await getTranslations('header.nav_items');

  return (
    <header className={classes.container}>
      <nav className={classes.navigation}>
        <ul className={classes.list}>
          {HEADER_NAVIGATION_LINKS.map(({ href, labelKey }) => (
            <Typography variant="listItem" key={href}>
              <Link href={href}>{t(labelKey)}</Link>
            </Typography>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
