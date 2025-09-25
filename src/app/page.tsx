import TimeTicks from '@/components/TimeTicks/TimeTicks';

import classes from './style.module.scss';

export default function Home() {
	return (
		<div className={classes.container}>
			<TimeTicks count={5} />
			<TimeTicks count={5} />
			<TimeTicks count={5} />
		</div>
	);
}
