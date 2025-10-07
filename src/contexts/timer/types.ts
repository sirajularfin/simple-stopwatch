export interface ITimerState {
  elapsedMs: number;
  running: boolean;
  storedPresets: Record<string, number>;
}

export interface ITimerFunctions {
  start: () => void;
  pause: () => void;
  stop: () => void;
  cacheTimerPresets: (label: string) => void;
  deleteTimerPresets: (index: number) => void;
  setElapsedMs: React.Dispatch<React.SetStateAction<number>>;
}

export interface ITimerContextProps {
  state: ITimerState;
  functions: ITimerFunctions;
}
