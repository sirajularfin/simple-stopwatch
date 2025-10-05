import { intervalToDuration } from 'date-fns';

export const msToTime = (ms: number) => {
  const duration = intervalToDuration({ start: 0, end: ms });

  return {
    hours: duration.hours,
    minutes: duration.minutes,
    seconds: duration.seconds,
  };
};
