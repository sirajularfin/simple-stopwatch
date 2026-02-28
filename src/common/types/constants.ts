import {
  DeleteIcon,
  PauseIcon,
  ResetIcon,
  ResumeIcon,
  StopIcon,
} from '@/assets';

export const DEFAULT_VALUE_ZERO = 0;
export const TIMER_PRESET_KEY = 'TIMER_PRESETS';
export const STOPWATCH_LAP_KEY = 'STOPWATCH_LAPS';

export enum APP_LANGUAGES {
  EN = 'en',
}

export enum APPLICATION_MODES {
  STOPWATCH = 'STOPWATCH',
  TIMER = 'TIMER',
}

export enum ACTION_TYPES {
  DELETE = 'DELETE',
  PAUSE = 'PAUSE',
  PLAY = 'PLAY',
  RESET = 'RESET',
  STOP = 'STOP',
  LAP = 'LAP',
}

export const ACTION_BUTTON_ICONS = {
  [ACTION_TYPES.PAUSE]: PauseIcon,
  [ACTION_TYPES.PLAY]: ResumeIcon,
  [ACTION_TYPES.DELETE]: DeleteIcon,
  [ACTION_TYPES.STOP]: StopIcon,
  [ACTION_TYPES.RESET]: ResetIcon,
};

export enum TIMER_PRESETS {
  ONE_MINUTE = 60_000,
  FIVE_MINUTES = 300_000,
  TEN_MINUTES = 600_000,
  FIFTEEN_MINUTES = 900_000,
  THIRTY_MINUTES = 1_800_000,
  SIXTY_MINUTES = 3_600_000,
}

export const TIMER_PRESET_OPTIONS = [
  { label: 'preset.1_min', value: TIMER_PRESETS.ONE_MINUTE },
  { label: 'preset.5_min', value: TIMER_PRESETS.FIVE_MINUTES },
  { label: 'preset.10_min', value: TIMER_PRESETS.TEN_MINUTES },
  { label: 'preset.15_min', value: TIMER_PRESETS.FIFTEEN_MINUTES },
  { label: 'preset.30_min', value: TIMER_PRESETS.THIRTY_MINUTES },
  { label: 'preset.60_min', value: TIMER_PRESETS.SIXTY_MINUTES },
];
