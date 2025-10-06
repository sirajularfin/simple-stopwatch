export interface ITimerState {
  hours: number | undefined;
  minutes: number | undefined;
  seconds: number | undefined;
  running: boolean;
}

export interface ITimerContextProps extends ITimerState {
  presetsLabel: string;
  setPresetsLabel: React.Dispatch<React.SetStateAction<string>>;
  start: () => void;
  pause: () => void;
  stop: () => void;
  reset: () => void;
  setElapsedMs: React.Dispatch<React.SetStateAction<number>>;
  savePresets: (name: string) => void;
}
