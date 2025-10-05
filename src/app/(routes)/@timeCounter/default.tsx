import React from 'react';

import { ACTION_TYPES } from '@/common/types/constants';
import ActionButton from '@/components/ActionButton/ActionButton';
import DisplayTimer from '@/components/DisplayTimer/DisplayTimer';
import TextInput from '@/components/TextInput/TextInput';
import { getTranslations } from 'next-intl/server';
import classes from './style.module.scss';

const TimeCounter: React.FC = async () => {
  const t = await getTranslations();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.timerPreset}>
          <DisplayTimer />
          <TextInput placeholder={t('savePreset_placeholder')} />
        </div>
        <div className={classes.actionButtons}>
          <ActionButton type={ACTION_TYPES.PLAY} size="LARGE" />
          <ActionButton type={ACTION_TYPES.STOP} size="LARGE" />
        </div>
      </div>
    </div>
  );
};

export default TimeCounter;
