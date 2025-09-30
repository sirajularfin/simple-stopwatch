import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { APPLICATION_MODES } from '@/common/types/constants';
import ActionButton from '@/components/ActionButton/ActionButton';
import DisplayTimer from '@/components/DisplayTimer/DisplayTimer';
import Preset from '@/components/Preset/Preset';
import TextInput from '@/components/TextInput/TextInput';
import classes from './style.module.scss';

export const metadata: Metadata = {
	title: 'Timer - Stopwatch App',
	description: 'A simple timer application built with Next.js',
};

export default async function Timer() {
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
			<Preset
				title={t('preset_title')}
				timestamp={t('preset_timestamp')}
				index={1}
			/>
		</div>
	);
}
