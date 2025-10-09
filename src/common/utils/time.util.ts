import { intervalToDuration } from 'date-fns';

export const msToTime = (ms: number) => {
  const duration = intervalToDuration({ start: 0, end: ms });

  return {
    hours: duration.hours ?? 0,
    minutes: duration.minutes ?? 0,
    seconds: duration.seconds ?? 0,
  };
};

export const timeToMs = (
  hours: number = 0,
  minutes: number = 0,
  seconds: number = 0
) => {
  return hours * 3600000 + minutes * 60000 + seconds * 1000;
};

export const formatTime = (elapsedMs: number) => {
  const { hours, minutes, seconds } = msToTime(elapsedMs);
  const pad = (num: number | undefined) => String(num ?? 0).padStart(2, '0');
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};
