'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { PRESET_KEY_DEFAULT } from '@/common/types/constants';
import logger from '@/common/utils/logger.util';
import {
  loadItemFromStorage,
  overrideStorageItem,
  saveToLocalStorage,
} from '@/common/utils/storage.util';
import { ITimerContextProps } from './types';

const TimerContext = createContext<ITimerContextProps | undefined>(undefined);

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimer must be used within a TimerProvider');
  }
  return context;
};

export const TimerProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // State
  const [running, setRunning] = useState(false);
  const [elapsedMs, setElapsedMs] = useState(0);
  const [storedPresets, setStoredPresets] = useState<Record<string, number>>(
    {}
  );

  // Refs
  const raf = useRef<number | null>(null);
  const lastTick = useRef<number | null>(null);

  // Load presets from storage on mount
  useEffect(() => {
    const response = loadItemFromStorage(PRESET_KEY_DEFAULT);
    if (response) {
      const timerPresets = JSON.parse(response);
      setStoredPresets(timerPresets);
    }
  }, []);

  // Timer tick logic
  const tick = useCallback((t: number) => {
    if (lastTick.current == null) lastTick.current = t;
    const delta = t - lastTick.current;
    lastTick.current = t;
    setElapsedMs(v => {
      const next = v - delta;
      if (next <= 0) {
        pause();
        return 0;
      }
      return next;
    });
    if (raf.current !== null) {
      raf.current = requestAnimationFrame(tick);
    }
  }, []);

  // Timer controls
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

  // Preset caching
  const cacheTimerPresets = useCallback(
    (label: string) => {
      const presets = JSON.stringify({ [label]: elapsedMs });
      saveToLocalStorage(PRESET_KEY_DEFAULT, presets);
      setStoredPresets(prev => ({ ...prev, ...JSON.parse(presets) }));
      logger(`[TimerProvider] Presets saved: ${presets}`);
    },
    [elapsedMs]
  );

  // Delete timer presets
  const deleteTimerPresets = useCallback((index: number) => {
    setStoredPresets(prev => {
      const updated = { ...prev };
      const label = Object.keys(updated)[index];
      delete updated[label];
      overrideStorageItem(PRESET_KEY_DEFAULT, JSON.stringify(updated));
      logger(`[TimerProvider] Preset deleted: ${label}`);
      return updated;
    });
  }, []);

  // Find timer presets
  const findTimerPresets = useCallback(
    (index: number) => {
      const preset = Object.values(storedPresets)[index];
      setElapsedMs(preset);
    },
    [storedPresets]
  );

  // Memoized context value
  const value = useMemo<ITimerContextProps>(
    () => ({
      state: {
        elapsedMs,
        running,
        storedPresets,
      },
      functions: {
        start,
        pause,
        stop,
        setElapsedMs,
        findTimerPresets,
        cacheTimerPresets,
        deleteTimerPresets,
      },
    }),
    [
      elapsedMs,
      running,
      storedPresets,
      start,
      pause,
      stop,
      setElapsedMs,
      findTimerPresets,
      cacheTimerPresets,
      deleteTimerPresets,
    ]
  );

  return (
    <TimerContext.Provider value={value}>{children}</TimerContext.Provider>
  );
};
