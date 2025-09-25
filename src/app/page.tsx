import TimeTick from '@/components/TimeTick/TimeTick';

import PlayButton from '@/components/PlayButton/PlayButton';
import classes from './style.module.scss';

export default function Home() {
	return (
		<div className={classes.container}>
			<div className={classes.ticksWrapper}>
				<TimeTick count={5} />
				<TimeTick count={5} />
				<TimeTick count={5} />
			</div>
			<PlayButton isPlaying={false} />
		</div>
	);
}
