interface ITimerState {
  elapsedMs: number;
  running: boolean;
  storedPresets: TimerPresetRecord;
}

interface ITimerFunctions {
  start: () => void;
  pause: () => void;
  stop: () => void;
  cacheTimerPresets: (label: string) => void;
  deleteTimerPresets: (index: number) => void;
  findTimerPresets: (index: number) => void;
  setElapsedMs: React.Dispatch<React.SetStateAction<number>>;
}

export type TimerPresetRecord = Record<string, number>;

export interface ITimerContextProps {
  state: ITimerState;
  functions: ITimerFunctions;
}
