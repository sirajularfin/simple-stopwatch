'use client';

import { useTranslations } from 'next-intl';
import React, { useEffect } from 'react';
import z from 'zod';

import { ACTION_TYPES } from '@/common/types/constants';
import logger from '@/common/utils/logger.util';
import { timeTickSchema } from '@/common/utils/validation.util';
import ActionButton from '@/components/ActionButton/ActionButton';
import DisplayTimer from '@/components/DisplayTimer/DisplayTimer';
import TextInput from '@/components/TextInput/TextInput';
import { useTimer } from '@/contexts/timer/TimerProvider';
import classes from './style.module.scss';

const TimeCounter: React.FC = () => {
  const t = useTranslations();
  const { presetsLabel, setPresetsLabel, savePresets } = useTimer();

  const handleSavePreset = () => {
    if (!presetsLabel.trim()) return;
    savePresets(presetsLabel);
    setPresetsLabel('');
  };

  useEffect(() => {
    const hourTick = document.getElementById('hourTick');
    const minuteTick = document.getElementById('minuteTick');
    const secondTick = document.getElementById('secondTick');

    const handleHourClick = () => {
      hourTick?.setAttribute('contentEditable', 'true');
      hourTick?.focus();
      try {
        timeTickSchema.parse({ hour: hourTick?.innerText });
      } catch (error) {
        z.treeifyError(error as z.ZodError);
      }
    };
    const handleHourBlur = () => {
      hourTick?.setAttribute('contentEditable', 'false');
      logger(`[HourTick] Content: ${hourTick?.innerText}`);
    };

    const handleMinuteClick = () => {
      minuteTick?.setAttribute('contentEditable', 'true');
      minuteTick?.focus();
      try {
        timeTickSchema.parse({ minute: minuteTick?.innerText });
      } catch (error) {
        z.treeifyError(error as z.ZodError);
      }
    };
    const handleMinuteBlur = () => {
      minuteTick?.setAttribute('contentEditable', 'false');
      logger(`[MinuteTick] Content: ${minuteTick?.innerText}`);
    };

    const handleSecondClick = () => {
      secondTick?.setAttribute('contentEditable', 'true');
      secondTick?.focus();
      try {
        timeTickSchema.parse({ second: secondTick?.innerText });
      } catch (error) {
        z.treeifyError(error as z.ZodError);
      }
    };
    const handleSecondBlur = () => {
      secondTick?.setAttribute('contentEditable', 'false');
      logger(`[SecondTick] Content: ${secondTick?.innerText}`);
    };

    hourTick?.addEventListener('click', handleHourClick);
    hourTick?.addEventListener('blur', handleHourBlur);

    minuteTick?.addEventListener('click', handleMinuteClick);
    minuteTick?.addEventListener('blur', handleMinuteBlur);

    secondTick?.addEventListener('click', handleSecondClick);
    secondTick?.addEventListener('blur', handleSecondBlur);

    return () => {
      hourTick?.removeEventListener('click', handleHourClick);
      hourTick?.removeEventListener('blur', handleHourBlur);

      minuteTick?.removeEventListener('click', handleMinuteClick);
      minuteTick?.removeEventListener('blur', handleMinuteBlur);

      secondTick?.removeEventListener('click', handleSecondClick);
      secondTick?.removeEventListener('blur', handleSecondBlur);
    };
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.timerPreset}>
          <DisplayTimer />
          <TextInput
            placeholder={t('savePreset_placeholder')}
            value={presetsLabel}
            onChange={e => setPresetsLabel(e.target.value)}
            onSuffixIconClick={handleSavePreset}
          />
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
