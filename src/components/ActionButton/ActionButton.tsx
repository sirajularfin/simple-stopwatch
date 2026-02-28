'use client';

import classNames from 'classnames';
import Image from 'next/image';

import { ACTION_BUTTON_ICONS, ACTION_TYPES, APPLICATION_MODES } from '@/common/types/constants';
import { useStopwatch } from '@/contexts/stopwatch/StopwatchProvider';
import { useTimer } from '@/contexts/timer/TimerProvider';
import { usePathname } from 'next/navigation';
import Typography from '../Typography/Typography';
import classes from './style.module.scss';

interface IProps {
  elementId?: number;
  type: ACTION_TYPES;
  size?: 'MEDIUM' | 'LARGE';
  disabled?: boolean;
}

const ActionButton: React.FC<IProps> = ({
  type,
  size = 'MEDIUM',
  elementId,
  disabled = false,
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
        stopwatchControls.recordLap();
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
      disabled={disabled}
      aria-label={type.toLowerCase()}
    >
      {type === ACTION_TYPES.LAP ? (
        <Typography variant="labelLarge" className={classes.LAP_BUTTON}>
          Lap
        </Typography>
      ) : type === ACTION_TYPES.RESET ? (
        <span className={classes.RESET_ICON}>
          <Image
            src={ACTION_BUTTON_ICONS[type]}
            alt={type.toLowerCase()}
            width={24}
            height={24}
          />
        </span>
      ) : (
        <Image
          src={ACTION_BUTTON_ICONS[type]}
          alt={type.toLowerCase()}
          width={24}
          height={24}
        />
      )}
    </button>
  );
};

export default ActionButton;
