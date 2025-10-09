interface IStopwatchState {
  lap: LapTimeRecord;
  elapsedMs: number;
  isRunning: boolean;
}

interface IStopwatchFunctions {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export interface IStopwatchContextProps {
  state: IStopwatchState;
  functions: IStopwatchFunctions;
}

export type LapTimeRecord = Record<number, number>;
