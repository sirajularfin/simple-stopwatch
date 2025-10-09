import { getTranslations } from 'next-intl/server';
import React from 'react';

import Typography from '../Typography/Typography';
import classes from './style.module.scss';

const Footer: React.FC = async () => {
  const t = await getTranslations('footer');

  return (
    <footer className={classes.container}>
      <Typography variant="bodyMedium">
        {t.rich('text', {
          span: children => <span>{children}</span>,
          year: new Date().getFullYear(),
        })}
      </Typography>
      <Typography variant="bodyMedium">{t('creator')}</Typography>
    </footer>
  );
};

export default Footer;
