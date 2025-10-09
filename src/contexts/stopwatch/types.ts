interface IStopwatchState {
  lap: LapTimeRecord;
  elapsedMs: number;
  running: boolean;
}

interface IStopwatchFunctions {
  start: () => void;
  stop: () => void;
  reset: () => void;
  recordLap: () => void;
}

export interface IStopwatchContextProps {
  state: IStopwatchState;
  functions: IStopwatchFunctions;
}

export type LapTimeRecord = Array<[number, number]>;
