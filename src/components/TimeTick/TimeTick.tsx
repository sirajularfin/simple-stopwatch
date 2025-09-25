import { formatTimeTicks } from '@/common/utils/string.util';
import classes from './style.module.scss';

interface IProps {
	count?: number;
}

const TimeTick: React.FC<IProps> = ({ count }) => {
	return (
		<div className={classes.container}>
			<div className={classes.tickWrapper}>
				<p className={classes.tick}>{formatTimeTicks(count)}</p>
			</div>
		</div>
	);
};

export default TimeTick;
