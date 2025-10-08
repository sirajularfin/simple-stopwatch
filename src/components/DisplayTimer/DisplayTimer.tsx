import { ArrowDownIcon, ArrowUpIcon } from '@/assets';
import React from 'react';
import classes from './style.module.scss';

interface IProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
  isRunning?: boolean;
}

const DisplayTimer: React.FC<IProps> = ({
  hours,
  minutes,
  seconds,
  isRunning,
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.tickWrapper} id="hourTick">
        {hours}
        {!isRunning && (
          <div className={classes.arrowBtn}>
            <ArrowUpIcon />
            <ArrowDownIcon />
          </div>
        )}
      </div>
      <div className={classes.tickWrapper} id="minuteTick">
        {minutes}
        {!isRunning && (
          <div className={classes.arrowBtn}>
            <ArrowUpIcon />
            <ArrowDownIcon />
          </div>
        )}
      </div>
      <div className={classes.tickWrapper} id="secondTick">
        {seconds}
        {!isRunning && (
          <div className={classes.arrowBtn}>
            <ArrowUpIcon />
            <ArrowDownIcon />
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayTimer;
