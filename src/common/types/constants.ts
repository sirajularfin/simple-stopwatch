export const DEFAULT_VALUE_ZERO = 0;

export enum APP_LANGUAGES {
	EN = 'en',
}

export enum APPLICATION_MODES {
	STOPWATCH = 'STOPWATCH',
	TIMER = 'TIMER',
}

export enum ACTION_TYPES {
	DELETE = 'DELETE',
	EDIT = 'EDIT',
	PAUSE = 'PAUSE',
	PLAY = 'PLAY',
	RESET = 'RESET',
	STOP = 'STOP',
}

export enum TIMER_PRESETS {
	ONE_MINUTE = 60,
	FIVE_MINUTES = 300,
	TEN_MINUTES = 600,
	FIFTEEN_MINUTES = 900,
	THIRTY_MINUTES = 1800,
	SIXTY_MINUTES = 3600,
}

export const TIMER_PRESET_OPTIONS = [
	{ label: '1 Minute', value: TIMER_PRESETS.ONE_MINUTE },
	{ label: '5 Minutes', value: TIMER_PRESETS.FIVE_MINUTES },
	{ label: '10 Minutes', value: TIMER_PRESETS.TEN_MINUTES },
	{ label: '15 Minutes', value: TIMER_PRESETS.FIFTEEN_MINUTES },
	{ label: '30 Minutes', value: TIMER_PRESETS.THIRTY_MINUTES },
	{ label: '60 Minutes', value: TIMER_PRESETS.SIXTY_MINUTES },
];
