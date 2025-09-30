import { DeleteIcon, EditIcon, PauseIcon, ResumeIcon, StopIcon } from '@/assets';
import { ACTION_TYPES } from '@/common/types/constants';
import classNames from 'classnames';
import classes from './style.module.scss';

interface IProps {
	type: ACTION_TYPES;
}

const ActionButton: React.FC<IProps> = ({ type }) => {
	let icon = null,
		actionBtn = null;
	switch (type) {
		case ACTION_TYPES.PAUSE:
			icon = <PauseIcon />;
			actionBtn = classes.pauseBtn;
			break;
		case ACTION_TYPES.PLAY:
			icon = <ResumeIcon />;
			actionBtn = classes.playBtn;
			break;
		case ACTION_TYPES.EDIT:
			icon = <EditIcon />;
			actionBtn = classes.editBtn;
			break;
		case ACTION_TYPES.DELETE:
			icon = <DeleteIcon />;
			actionBtn = classes.deleteBtn;
			break;
		case ACTION_TYPES.STOP:
			icon = <StopIcon />;
			actionBtn = classes.stopBtn;
			break;
		default:
			break;
	}

	return <button className={classNames(classes.container, actionBtn)}>{icon}</button>;
};

export default ActionButton;
