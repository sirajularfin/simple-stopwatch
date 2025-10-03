export interface ITimerState {
  running: boolean;
  elapsedMs: number;
}

export interface ITimerContextProps extends ITimerState {
  start: () => void;
  pause: () => void;
  stop: () => void;
  reset: () => void;
}
