'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { ACTION_TYPES, APPLICATION_MODES } from '@/common/types/constants';
import { msToTime } from '@/common/utils/time.util';
import ActionButton from '@/components/ActionButton/ActionButton';
import DisplayTimer from '@/components/DisplayTimer/DisplayTimer';
import TextInput from '@/components/TextInput/TextInput';
import classes from './style.module.scss';
import useTimeCounter from './timeCounter.hook';

const TimeCounter: React.FC = () => {
  const t = useTranslations();
  const { state, functions } = useTimeCounter();
  const { hours, minutes, seconds } = msToTime(state.elapsedMs);

  const renderTimerControls = () => (
    <div className={classes.timerControls}>
      {state.isRunning ? (
        <ActionButton type={ACTION_TYPES.PAUSE} size="LARGE" />
      ) : (
        <ActionButton
          type={ACTION_TYPES.PLAY}
          size="LARGE"
          disabled={!state.elapsedMs}
        />
      )}
      <ActionButton type={ACTION_TYPES.STOP} size="LARGE" />
    </div>
  );

  const renderStopwatchControls = () => (
    <div className={classes.stopwatchControls}>
      {state.isRunning ? (
        <ActionButton type={ACTION_TYPES.STOP} size="LARGE" />
      ) : (
        <ActionButton type={ACTION_TYPES.PLAY} size="LARGE" />
      )}
      <div className={classes.actionButtons}>
        <ActionButton type={ACTION_TYPES.RESET} size="LARGE" />
        <ActionButton
          type={ACTION_TYPES.LAP}
          size="LARGE"
          disabled={!state.elapsedMs}
        />
      </div>
    </div>
  );

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.timerPreset}>
          <DisplayTimer
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            appMode={
              state.isTimerMode
                ? APPLICATION_MODES.TIMER
                : APPLICATION_MODES.STOPWATCH
            }
            isRunning={state.isRunning}
          />
          {state.isTimerMode && (
            <TextInput
              placeholder={t('savePreset_placeholder')}
              value={state.presetsLabel}
              onChange={e => functions.setPresetsLabel(e.target.value)}
              onSuffixIconClick={functions.storePresetLabel}
            />
          )}
        </div>
        {state.isTimerMode ? renderTimerControls() : renderStopwatchControls()}
      </div>
    </div>
  );
};

export default TimeCounter;
