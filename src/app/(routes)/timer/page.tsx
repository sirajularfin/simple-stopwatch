import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { APPLICATION_MODES } from '@/common/types/constants';
import ActionButton from '@/components/ActionButton/ActionButton';
import DisplayTimer from '@/components/DisplayTimer/DisplayTimer';
import TextInput from '@/components/TextInput/TextInput';
import Typography from '@/components/Typography/Typography';
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
			<Typography
				variant='bodySmall'
				className={classes.shortcutTips}>
				{t('shortcut_tips')}
			</Typography>
		</div>
	);
}
