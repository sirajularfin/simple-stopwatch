import { getTranslations } from 'next-intl/server';

import { APPLICATION_MODES } from '@/common/types/constants';
import ActionButton from '@/components/ActionButton/ActionButton';
import DisplayTimer from '@/components/DisplayTimer/DisplayTimer';
import TextInput from '@/components/TextInput/TextInput';
import classes from './style.module.scss';

export default async function Home() {
	const t = await getTranslations();

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<div className={classes.timerPreset}>
					<TextInput placeholder={t('savePreset_placeholder')} />
					<DisplayTimer
						count={5}
						mode={APPLICATION_MODES.TIMER}
					/>
				</div>
				<ActionButton isPlaying={false} />
			</div>
		</div>
	);
}
