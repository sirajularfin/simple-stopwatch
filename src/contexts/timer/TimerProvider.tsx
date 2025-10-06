'use client';

import { PRESET_KEY_DEFAULT } from '@/common/types/constants';
import logger from '@/common/utils/logger.util';
import { saveToLocalStorage } from '@/common/utils/storage.util';
import { msToTime } from '@/common/utils/time.util';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import { ITimerContextProps } from './types';

const TimerContext = createContext<ITimerContextProps | undefined>(undefined);

export const TimerProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [running, setRunning] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [presetsLabel, setPresetsLabel] = useState<string>('');
  const { hours, minutes, seconds } = msToTime(elapsedMs);
  const raf = useRef<number | null>(null);
  const lastTick = useRef<number | null>(null);

  const tick = useCallback((t: number) => {
    if (lastTick.current == null) lastTick.current = t;
    const delta = t - lastTick.current;
    lastTick.current = t;
    setElapsedMs(v => v + delta);
    raf.current = requestAnimationFrame(tick);
  }, []);

  const start = useCallback(() => {
    if (running) return;
    setRunning(true);
    lastTick.current = null;
    raf.current = requestAnimationFrame(tick);
  }, [running, tick]);

  const pause = useCallback(() => {
    if (!running) return;
    setRunning(false);
    if (raf.current) cancelAnimationFrame(raf.current);
    raf.current = null;
    lastTick.current = null;
  }, [running]);

  const stop = useCallback(() => {
    pause();
    setElapsedMs(0);
  }, [pause]);

  const reset = useCallback(() => setElapsedMs(0), []);

  const savePresets = useCallback(() => {
    const presets = { [presetsLabel]: elapsedMs };
    saveToLocalStorage(PRESET_KEY_DEFAULT, presets);
    logger(`[TimerProvider] Presets saved: ${JSON.stringify(presets)}`);
  }, [elapsedMs, presetsLabel]);

  const value = useMemo<ITimerContextProps>(
    () => ({
      presetsLabel,
      setPresetsLabel,
      hours,
      minutes,
      seconds,
      running,
      start,
      pause,
      stop,
      reset,
      setElapsedMs,
      savePresets,
    }),
    [
      presetsLabel,
      hours,
      minutes,
      seconds,
      running,
      start,
      pause,
      stop,
      reset,
      savePresets,
    ]
  );

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};
