import { usePathname } from 'next/navigation';
import React, { useEffect } from 'react';

import { APPLICATION_MODES } from '@/common/types/constants';
import logger from '@/common/utils/logger.util';
import { clamp, toInt } from '@/common/utils/number.util';
import { timeToMs } from '@/common/utils/time.util';
import { useStopwatch } from '@/contexts/stopwatch/StopwatchProvider';
import { useTimer } from '@/contexts/timer/TimerProvider';

const useTimeCounter = () => {
  const pathname = usePathname();
  const { state: timerState, functions: timerFunctions } = useTimer();
  const { state: stopwatchState } = useStopwatch();
  const [presetsLabel, setPresetsLabel] = React.useState('');

  const isTimerMode =
    pathname.toUpperCase().replace('/', '') === APPLICATION_MODES.TIMER;

  const storePresetLabel = () => {
    const cleanLabel = presetsLabel.trim();
    if (!cleanLabel || !timerState.elapsedMs) return;
    timerFunctions.cacheTimerPresets(cleanLabel);
    setPresetsLabel('');
  };

  useEffect(() => {
    if (!isTimerMode) return;

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
      timerFunctions.setElapsedMs(computeMsFromDom());
      hourTick?.setAttribute('contentEditable', 'false');
      logger(`[HourTick] Content: ${hourTick?.innerText}`);
    };

    const handleMinuteClick = () => {
      minuteTick?.setAttribute('contentEditable', 'true');
      minuteTick?.focus();
    };
    const handleMinuteBlur = () => {
      timerFunctions.setElapsedMs(computeMsFromDom());
      minuteTick?.setAttribute('contentEditable', 'false');
      logger(`[MinuteTick] Content: ${minuteTick?.innerText}`);
    };

    const handleSecondClick = () => {
      secondTick?.setAttribute('contentEditable', 'true');
      secondTick?.focus();
    };
    const handleSecondBlur = () => {
      timerFunctions.setElapsedMs(computeMsFromDom());
      secondTick?.setAttribute('contentEditable', 'false');
      logger(`[SecondTick] Content: ${secondTick?.innerText}`);
    };

    hourTick?.addEventListener('click', handleHourClick);
    hourTick?.addEventListener('blur', handleHourBlur);

    minuteTick?.addEventListener('click', handleMinuteClick);
    minuteTick?.addEventListener('blur', handleMinuteBlur);

    secondTick?.addEventListener('click', handleSecondClick);
    secondTick?.addEventListener('blur', handleSecondBlur);

    timerFunctions.setElapsedMs(computeMsFromDom());

    return () => {
      hourTick?.removeEventListener('click', handleHourClick);
      hourTick?.removeEventListener('blur', handleHourBlur);

      minuteTick?.removeEventListener('click', handleMinuteClick);
      minuteTick?.removeEventListener('blur', handleMinuteBlur);

      secondTick?.removeEventListener('click', handleSecondClick);
      secondTick?.removeEventListener('blur', handleSecondBlur);
    };
  }, [isTimerMode]);

  return {
    state: {
      isTimerMode,
      elapsedMs: isTimerMode ? timerState.elapsedMs : stopwatchState.elapsedMs,
      isRunning: isTimerMode ? timerState.running : stopwatchState.running,
      presetsLabel,
    },
    functions: {
      setPresetsLabel,
      storePresetLabel,
    },
  };
};

export default useTimeCounter;
