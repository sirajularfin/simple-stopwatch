'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { ACTION_TYPES } from '@/common/types/constants';
import ActionButton from '@/components/ActionButton/ActionButton';
import DisplayTimer from '@/components/DisplayTimer/DisplayTimer';
import TextInput from '@/components/TextInput/TextInput';
import classes from './style.module.scss';
import useTimeCounter from './timeCounter.hook';

const TimeCounter: React.FC = () => {
  const t = useTranslations();
  const { state, functions } = useTimeCounter();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.timerPreset}>
          <DisplayTimer
            hours={state.hours}
            minutes={state.minutes}
            seconds={state.seconds}
          />
          <TextInput
            placeholder={t('savePreset_placeholder')}
            value={state.presetsLabel}
            onChange={e => functions.setPresetsLabel(e.target.value)}
            onSuffixIconClick={functions.storePresetLabel}
          />
        </div>
        <div className={classes.actionButtons}>
          {state.isRunning && state.elapsedMs > 0 ? (
            <ActionButton type={ACTION_TYPES.PAUSE} size="LARGE" />
          ) : (
            <ActionButton type={ACTION_TYPES.PLAY} size="LARGE" />
          )}
          <ActionButton type={ACTION_TYPES.STOP} size="LARGE" />
        </div>
      </div>
    </div>
  );
};

export default TimeCounter;
