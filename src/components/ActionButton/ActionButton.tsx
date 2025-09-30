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
			actionBtn = classes.pause;
			break;
		case ACTION_TYPES.PLAY:
			icon = <ResumeIcon />;
			actionBtn = classes.play;
			break;
		case ACTION_TYPES.EDIT:
			icon = <EditIcon />;
			actionBtn = classes.edit;
			break;
		case ACTION_TYPES.DELETE:
			icon = <DeleteIcon />;
			actionBtn = classes.delete;
			break;
		case ACTION_TYPES.STOP:
			icon = <StopIcon />;
			actionBtn = classes.stop;
			break;
		default:
			break;
	}

	return <button className={classNames(classes.container, actionBtn)}>{icon}</button>;
};

export default ActionButton;
