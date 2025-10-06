'use client';

import classNames from 'classnames';

import {
  DeleteIcon,
  EditIcon,
  PauseIcon,
  ResumeIcon,
  StopIcon,
} from '@/assets';
import { ACTION_TYPES } from '@/common/types/constants';
import { useTimer } from '@/contexts/timer/TimerProvider';
import classes from './style.module.scss';

interface IProps {
  type: ACTION_TYPES;
  size?: 'MEDIUM' | 'LARGE';
}

const ACTION_BUTTON_ICONS = {
  [ACTION_TYPES.PAUSE]: <PauseIcon />,
  [ACTION_TYPES.PLAY]: <ResumeIcon />,
  [ACTION_TYPES.EDIT]: <EditIcon />,
  [ACTION_TYPES.DELETE]: <DeleteIcon />,
  [ACTION_TYPES.STOP]: <StopIcon />,
};

const ActionButton: React.FC<IProps> = ({ type, size = 'MEDIUM' }) => {
  const { start, pause, stop, reset } = useTimer();

  const handleAction = () => {
    switch (type) {
      case ACTION_TYPES.PLAY:
        start();
        break;
      case ACTION_TYPES.PAUSE:
        pause();
        break;
      case ACTION_TYPES.STOP:
        stop();
        break;
      case ACTION_TYPES.EDIT:
        // Implement edit functionality
        break;
      case ACTION_TYPES.DELETE:
        reset();
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
