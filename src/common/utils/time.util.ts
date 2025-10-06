import { intervalToDuration } from 'date-fns';

export const msToTime = (ms: number) => {
  const duration = intervalToDuration({ start: 0, end: ms });

  return {
    hours: duration.hours,
    minutes: duration.minutes,
    seconds: duration.seconds,
  };
};

export const timeToMs = (
  hours: number = 0,
  minutes: number = 0,
  seconds: number = 0
) => {
  return hours * 3600000 + minutes * 60000 + seconds * 1000;
};
