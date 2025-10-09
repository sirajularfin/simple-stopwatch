import { APPLICATION_MODES } from '@/common/types/constants';
import classNames from 'classnames';
import React from 'react';
import classes from './style.module.scss';

interface IProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
  appMode: APPLICATION_MODES;
  isRunning?: boolean;
}

const DisplayTimer: React.FC<IProps> = ({
  hours,
  minutes,
  seconds,
  appMode,
  isRunning,
}) => {
  return (
    <div
      className={classNames(classes.container, {
        [classes.stopwatchMode]: appMode === APPLICATION_MODES.STOPWATCH,
      })}
    >
      <div className={classes.tickWrapper} id="hourTick">
        {hours}
        {/* {!isRunning && (
          <div className={classes.arrowBtn}>
            <ArrowUpIcon />
            <ArrowDownIcon />
          </div>
        )} */}
      </div>
      <div className={classes.tickWrapper} id="minuteTick">
        {minutes}
        {/* {!isRunning && (
          <div className={classes.arrowBtn}>
            <ArrowUpIcon />
            <ArrowDownIcon />
          </div>
        )} */}
      </div>
      <div className={classes.tickWrapper} id="secondTick">
        {seconds}
        {/* {!isRunning && (
          <div className={classes.arrowBtn}>
            <ArrowUpIcon />
            <ArrowDownIcon />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default DisplayTimer;
