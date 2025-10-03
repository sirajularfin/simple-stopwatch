import classNames from 'classnames';

import { DeleteIcon, EditIcon, PauseIcon, ResumeIcon, StopIcon } from '@/assets';
import { ACTION_TYPES } from '@/common/types/constants';
import classes from './style.module.scss';

interface IProps {
	type: ACTION_TYPES;
	size?: 'MEDIUM' | 'LARGE';
}

const ActionButton: React.FC<IProps> = ({ type, size = 'MEDIUM' }) => {
	const iconRegistry = {
		[ACTION_TYPES.PAUSE]: <PauseIcon />,
		[ACTION_TYPES.PLAY]: <ResumeIcon />,
		[ACTION_TYPES.EDIT]: <EditIcon />,
		[ACTION_TYPES.DELETE]: <DeleteIcon />,
		[ACTION_TYPES.STOP]: <StopIcon />,
	};

	return (
		<button className={classNames(classes.container, classes[`${type}_BUTTON`], classes[`${size}_SIZE`])}>
			{iconRegistry[type as keyof typeof iconRegistry]}
		</button>
	);
};

export default ActionButton;
