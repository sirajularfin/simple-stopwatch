import React from 'react';

import { ACTION_TYPES } from '@/common/types/constants';
import { useTranslations } from 'next-intl';
import ActionButton from '../ActionButton/ActionButton';
import Typography from '../Typography/Typography';
import classes from './style.module.scss';

interface IProps {
  index: number;
  title: string;
  timestamp: string;
}

const Preset: React.FC<IProps> = ({ title, timestamp, index }) => {
  const t = useTranslations();

  return (
    <div className={classes.container}>
      <Typography variant="headingLarge" className={classes.text}>
        {title}
      </Typography>
      <Typography variant="displaySmall" className={classes.text}>
        {timestamp}
      </Typography>
      <div className={classes.actionButtons}>
        <ActionButton
          type={ACTION_TYPES.PLAY}
          size="MEDIUM"
          elementId={index}
        />
        <ActionButton
          type={ACTION_TYPES.EDIT}
          size="MEDIUM"
          elementId={index}
        />
        <ActionButton
          type={ACTION_TYPES.DELETE}
          size="MEDIUM"
          elementId={index}
        />
      </div>
      <Typography variant="labelLarge" align="center" className={classes.text}>
        {t.rich('preset_label', {
          span: children => <span>{children}</span>,
          index: index + 1,
        })}
      </Typography>
    </div>
  );
};

export default Preset;
