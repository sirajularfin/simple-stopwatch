import React from 'react';
import classes from './style.module.scss';

interface IProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const DisplayTimer: React.FC<IProps> = ({ hours, minutes, seconds }) => {
  return (
    <div className={classes.container}>
      <div className={classes.tickWrapper} id="hourTick">
        {hours}
      </div>
      <div className={classes.tickWrapper} id="minuteTick">
        {minutes}
      </div>
      <div className={classes.tickWrapper} id="secondTick">
        {seconds}
      </div>
    </div>
  );
};

export default DisplayTimer;
