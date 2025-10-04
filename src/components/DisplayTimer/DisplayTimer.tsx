'use client';

import React from 'react';

import { APPLICATION_MODES } from '@/common/types/constants';
import logger from '@/common/utils/logger.util';
import { useTimer } from '@/contexts/timer/TimerProvider';
import { useEffect } from 'react';
import classes from './style.module.scss';

interface IProps {
  mode: APPLICATION_MODES;
}

const DisplayTimer: React.FC<IProps> = React.memo(({ mode }) => {
  const { elapsedMs } = useTimer();

  useEffect(() => {
    const hourTick = document.getElementById('hourTick');
    const minuteTick = document.getElementById('minuteTick');
    const secondTick = document.getElementById('secondTick');

    const handleHourClick = () => {
      hourTick?.setAttribute('contentEditable', 'true');
      hourTick?.focus();
    };
    const handleHourBlur = () => {
      hourTick?.setAttribute('contentEditable', 'false');
      logger(`[HourTick] Content: ${hourTick?.innerText}`);
    };

    const handleMinuteClick = () => {
      minuteTick?.setAttribute('contentEditable', 'true');
      minuteTick?.focus();
    };
    const handleMinuteBlur = () => {
      minuteTick?.setAttribute('contentEditable', 'false');
      logger(`[MinuteTick] Content: ${minuteTick?.innerText}`);
    };

    const handleSecondClick = () => {
      secondTick?.setAttribute('contentEditable', 'true');
      secondTick?.focus();
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
      <div
        className={classes.tickWrapper}
        id="hourTick"
        contentEditable="false"
      ></div>
      <div
        className={classes.tickWrapper}
        id="minuteTick"
        contentEditable="false"
      ></div>
      <div
        className={classes.tickWrapper}
        id="secondTick"
        contentEditable="false"
      ></div>
    </div>
  );
});

DisplayTimer.displayName = 'DisplayTimer';

export default DisplayTimer;
