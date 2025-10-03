'use client';

import React from 'react';

import { APPLICATION_MODES } from '@/common/types/constants';
import { formatTimeTicks } from '@/common/utils/string.util';
import Typography from '../Typography/Typography';
import classes from './style.module.scss';

interface IProps {
  count: number;
  mode: APPLICATION_MODES;
  isRunning?: boolean;
  resetTimer?: boolean;
}

const DisplayTimer: React.FC<IProps> = ({
  count,
  mode,
  isRunning = false,
  resetTimer = false,
}) => {
  const [timer, setTimer] = React.useState<number>(count ?? 0);

  React.useEffect(() => {
    switch (mode) {
      case APPLICATION_MODES.STOPWATCH:
        setTimer(0);
        break;
      case APPLICATION_MODES.TIMER:
        setTimer(count ?? 0);
        break;
      default:
        setTimer(0);
        break;
    }
    // const interval = setInterval(() => {
    // 	setTimer((prev) => prev + 1);
    // }, 1000);

    // return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.tickWrapper}>
        <Typography className={classes.tick} variant="displayLarge">
          {formatTimeTicks(timer)}
        </Typography>
      </div>
      <div className={classes.tickWrapper}>
        <Typography className={classes.tick} variant="displayLarge">
          {formatTimeTicks(timer)}
        </Typography>
      </div>
      <div className={classes.tickWrapper}>
        <Typography className={classes.tick} variant="displayLarge">
          {formatTimeTicks(timer)}
        </Typography>
      </div>
    </div>
  );
};

export default DisplayTimer;
