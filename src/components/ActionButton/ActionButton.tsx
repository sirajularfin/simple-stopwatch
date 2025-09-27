import { PauseIcon, ResumeIcon } from '@/assets';
import classes from './style.module.scss';

interface IProps {
	isPlaying?: boolean;
}

const ActionButton: React.FC<IProps> = ({ isPlaying }) => {
	return <button className={classes.container}>{isPlaying ? <PauseIcon /> : <ResumeIcon />}</button>;
};

export default ActionButton;
