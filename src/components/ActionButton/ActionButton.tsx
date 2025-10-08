'use client';

import classNames from 'classnames';

import {
  DeleteIcon,
  PauseIcon,
  ResetIcon,
  ResumeIcon,
  StopIcon,
} from '@/assets';
import { ACTION_TYPES, APPLICATION_MODES } from '@/common/types/constants';
import { useStopwatch } from '@/contexts/stopwatch/StopwatchProvider';
import { useTimer } from '@/contexts/timer/TimerProvider';
import { usePathname } from 'next/navigation';
import Typography from '../Typography/Typography';
import classes from './style.module.scss';

interface IProps {
  elementId?: number;
  type: ACTION_TYPES;
  size?: 'MEDIUM' | 'LARGE';
}

const ACTION_BUTTON_ICONS = {
  [ACTION_TYPES.PAUSE]: <PauseIcon />,
  [ACTION_TYPES.PLAY]: <ResumeIcon />,
  [ACTION_TYPES.DELETE]: <DeleteIcon />,
  [ACTION_TYPES.STOP]: <StopIcon />,
  [ACTION_TYPES.RESET]: (
    <span className={classes.RESET_ICON}>
      <ResetIcon />
    </span>
  ),
  [ACTION_TYPES.LAP]: (
    <Typography variant="labelLarge" className={classes.LAP_BUTTON}>
      Lap
    </Typography>
  ),
};

const ActionButton: React.FC<IProps> = ({
  type,
  size = 'MEDIUM',
  elementId,
}) => {
  const { functions: timerControls } = useTimer();
  const { functions: stopwatchControls } = useStopwatch();

  const pathname = usePathname();
  const isTimerMode =
    pathname.toUpperCase().replace('/', '') === APPLICATION_MODES.TIMER;
  const functions = isTimerMode ? timerControls : stopwatchControls;

  const handleAction = () => {
    switch (type) {
      case ACTION_TYPES.PLAY:
        if (typeof elementId === 'number') {
          timerControls?.findTimerPresets(elementId);
          return;
        }
        functions.start();
        break;
      case ACTION_TYPES.PAUSE:
        timerControls.pause();
        break;
      case ACTION_TYPES.STOP:
        functions.stop();
        break;
      case ACTION_TYPES.DELETE:
        if (typeof elementId === 'number') {
          timerControls.deleteTimerPresets(elementId);
        }
        break;
      case ACTION_TYPES.LAP:
        // stopwatchControls.addLap();
        break;
      case ACTION_TYPES.RESET:
        stopwatchControls.reset();
        break;
      default:
        break;
    }
  };

  return (
    <button
      className={classNames(
        classes.container,
        classes[`${type}_BUTTON`],
        classes[`${size}_SIZE`]
      )}
      onClick={handleAction}
      type="button"
      aria-label={type.toLowerCase()}
    >
      {ACTION_BUTTON_ICONS[type as keyof typeof ACTION_BUTTON_ICONS]}
    </button>
  );
};

export default ActionButton;
