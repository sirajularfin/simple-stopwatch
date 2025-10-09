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
  const [running, setRunning] = useState(false);
  const [lap, setLap] = useState<LapTimeRecord>([]);

  // requestAnimationFrame refs
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, []);

  const tick = useCallback((ts: number) => {
    if (lastTsRef.current === null) {
      lastTsRef.current = ts;
    }
    const delta = ts - lastTsRef.current;
    lastTsRef.current = ts;
    setElapsedMs(prev => prev + delta);
    if (rafRef.current !== null) {
      rafRef.current = requestAnimationFrame(tick);
    }
  }, []);

  const start = useCallback(() => {
    if (running) return;
    setRunning(true);
    lastTsRef.current = null;
    rafRef.current = requestAnimationFrame(tick);
  }, [running, tick]);

  const stop = useCallback(() => {
    setRunning(false);
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTsRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setElapsedMs(0);
    setLap([]);
    setRunning(false);
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    lastTsRef.current = null;
  }, []);

  const recordLap = useCallback(() => {
    setLap(prev => {
      const prevSplit = prev.length ? prev[prev.length - 1][1] : 0;
      const lapTime = elapsedMs - prevSplit;
      const splitTime = elapsedMs;
      return [...prev, [lapTime, splitTime]];
    });
  }, [elapsedMs]);

  const value = useMemo<IStopwatchContextProps>(
    () => ({
      state: {
        lap,
        elapsedMs,
        running,
      },
      functions: {
        start,
        stop,
        reset,
        recordLap,
      },
    }),
    [lap, elapsedMs, running, start, stop, reset, recordLap]
  );

  return (
    <StopwatchContext.Provider value={value}>
      {children}
    </StopwatchContext.Provider>
  );
};
