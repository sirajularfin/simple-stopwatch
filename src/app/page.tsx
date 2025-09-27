import DisplayTimer from '@/components/DisplayTimer/DisplayTimer';

import { APPLICATION_MODES } from '@/common/types/constants';
import ActionButton from '@/components/ActionButton/ActionButton';
import classes from './style.module.scss';

export default function Home() {
	return (
		<div className={classes.container}>
			<div className={classes.timerPreset}>
				<DisplayTimer
					count={5}
					mode={APPLICATION_MODES.TIMER}
				/>
				<ActionButton isPlaying={false} />
			</div>
		</div>
	);
}
