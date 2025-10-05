'use client';

import React, { useEffect } from 'react';
import z from 'zod';

import logger from '@/common/utils/logger.util';
import { timeTickSchema } from '@/common/utils/validation.util';
import { useTimer } from '@/contexts/timer/TimerProvider';
import classes from './style.module.scss';

const DisplayTimer: React.FC = React.memo(() => {
  const { hours, minutes, seconds, setElapsedMs } = useTimer();

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

    setElapsedMs(
      (Number(hourTick?.innerText ?? 0) * 3600 +
        Number(minuteTick?.innerText ?? 0) * 60 +
        Number(secondTick?.innerText ?? 0)) *
        1000
    );

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
      >
        {hours}
      </div>
      <div
        className={classes.tickWrapper}
        id="minuteTick"
        contentEditable="false"
      >
        {minutes}
      </div>
      <div
        className={classes.tickWrapper}
        id="secondTick"
        contentEditable="false"
      >
        {seconds}
      </div>
    </div>
  );
});

DisplayTimer.displayName = 'DisplayTimer';

export default DisplayTimer;
