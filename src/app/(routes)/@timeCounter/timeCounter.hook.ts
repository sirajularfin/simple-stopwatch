import React, { useEffect } from 'react';

import logger from '@/common/utils/logger.util';
import { clamp, toInt } from '@/common/utils/number.util';
import { msToTime, timeToMs } from '@/common/utils/time.util';
import { useTimer } from '@/contexts/timer/TimerProvider';

const useTimeCounter = () => {
  const { state, functions } = useTimer();
  const [presetsLabel, setPresetsLabel] = React.useState('');

  const { hours, minutes, seconds } = msToTime(state.elapsedMs);

  const storePresetLabel = () => {
    const cleanLabel = presetsLabel.trim();
    if (!cleanLabel) return;
    functions.cacheTimerPresets(cleanLabel);
    setPresetsLabel('');
  };

  useEffect(() => {
    const hourTick = document.getElementById('hourTick');
    const minuteTick = document.getElementById('minuteTick');
    const secondTick = document.getElementById('secondTick');

    const computeMsFromDom = () => {
      const h = toInt(hourTick?.innerText);
      const m = clamp(toInt(minuteTick?.innerText), 0, 59);
      const s = clamp(toInt(secondTick?.innerText), 0, 59);
      return timeToMs(h, m, s);
    };

    const handleHourClick = () => {
      hourTick?.setAttribute('contentEditable', 'true');
      hourTick?.focus();
    };
    const handleHourBlur = () => {
      functions.setElapsedMs(computeMsFromDom());
      hourTick?.setAttribute('contentEditable', 'false');
      logger(`[HourTick] Content: ${hourTick?.innerText}`);
    };

    const handleMinuteClick = () => {
      minuteTick?.setAttribute('contentEditable', 'true');
      minuteTick?.focus();
    };
    const handleMinuteBlur = () => {
      functions.setElapsedMs(computeMsFromDom());
      minuteTick?.setAttribute('contentEditable', 'false');
      logger(`[MinuteTick] Content: ${minuteTick?.innerText}`);
    };

    const handleSecondClick = () => {
      secondTick?.setAttribute('contentEditable', 'true');
      secondTick?.focus();
    };
    const handleSecondBlur = () => {
      functions.setElapsedMs(computeMsFromDom());
      secondTick?.setAttribute('contentEditable', 'false');
      logger(`[SecondTick] Content: ${secondTick?.innerText}`);
    };

    hourTick?.addEventListener('click', handleHourClick);
    hourTick?.addEventListener('blur', handleHourBlur);

    minuteTick?.addEventListener('click', handleMinuteClick);
    minuteTick?.addEventListener('blur', handleMinuteBlur);

    secondTick?.addEventListener('click', handleSecondClick);
    secondTick?.addEventListener('blur', handleSecondBlur);

    functions.setElapsedMs(computeMsFromDom());

    return () => {
      hourTick?.removeEventListener('click', handleHourClick);
      hourTick?.removeEventListener('blur', handleHourBlur);

      minuteTick?.removeEventListener('click', handleMinuteClick);
      minuteTick?.removeEventListener('blur', handleMinuteBlur);

      secondTick?.removeEventListener('click', handleSecondClick);
      secondTick?.removeEventListener('blur', handleSecondBlur);
    };
  }, []);

  return {
    state: {
      hours,
      minutes,
      seconds,
      elapsedMs: state.elapsedMs,
      isRunning: state.running,
      presetsLabel,
    },
    functions: {
      setPresetsLabel,
      storePresetLabel,
    },
  };
};

export default useTimeCounter;
