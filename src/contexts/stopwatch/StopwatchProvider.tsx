'use client';

import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

import { IStopwatchContextProps, LapTimeRecord } from './types';

const StopwatchContext = createContext<IStopwatchContextProps | undefined>(
  undefined
);

export const useStopwatch = () => {
  const context = useContext(StopwatchContext);
  if (!context) {
    throw new Error('useStopwatch must be used within a StopwatchProvider');
  }
  return context;
};

export const StopwatchProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [elapsedMs, setElapsedMs] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lap, setLap] = useState<LapTimeRecord>({});

  // requestAnimationFrame refs
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const accMsRef = useRef(0); // accumulate ms until we cross 1000

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  const tick = useCallback((ts: number) => {
    if (lastTsRef.current == null) {
      lastTsRef.current = ts;
    }
    const delta = ts - lastTsRef.current;
    lastTsRef.current = ts;

    // accumulate delta and convert to whole seconds
    accMsRef.current += delta;
    if (accMsRef.current >= 1000) {
      const inc = Math.floor(accMsRef.current / 1000);
      accMsRef.current -= inc * 1000;
      setElapsedMs(prev => prev + inc);
    }

    if (rafRef.current !== null) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, []);

  const start = useCallback(() => {
    if (isRunning) return;
    setIsRunning(true);
    lastTsRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [isRunning, tick]);

  const stop = useCallback(() => {
    setIsRunning(false);
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTsRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setElapsedMs(0);
    setIsRunning(false);
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTsRef.current = null;
    accMsRef.current = 0;
  }, []);

  const value = useMemo<IStopwatchContextProps>(
    () => ({
      state: {
        lap,
        elapsedMs,
        isRunning,
      },
      functions: {
        start,
        stop,
        reset,
      },
    }),
    [elapsedMs, isRunning, start, stop, reset]
  );

  return (
    <StopwatchContext.Provider value={value}>
      {children}
    </StopwatchContext.Provider>
  );
};
