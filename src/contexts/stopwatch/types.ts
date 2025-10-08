export interface IStopwatchState {
  elapsedMs: number;
  isRunning: boolean;
}

export interface IStopwatchFunctions {
  start: () => void;
  stop: () => void;
  reset: () => void;
}

export interface IStopwatchContextProps {
  state: IStopwatchState;
  functions: IStopwatchFunctions;
}
