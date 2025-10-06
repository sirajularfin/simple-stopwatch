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
      <div
        className={classes.tickWrapper}
        id="hourTick"
        contentEditable="false"
      >
        {hours}
      </div>
      <div
        className={classes.tickWrapper}
        id="minuteTick"
        contentEditable="false"
      >
        {minutes}
      </div>
      <div
        className={classes.tickWrapper}
        id="secondTick"
        contentEditable="false"
      >
        {seconds}
      </div>
    </div>
  );
};

export default DisplayTimer;
