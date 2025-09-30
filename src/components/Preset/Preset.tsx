import React from 'react';

import { getTranslations } from 'next-intl/server';
import Typography from '../Typography/Typography';
import classes from './style.module.scss';

interface IProps {
	index: number;
	title: string;
	timestamp: string;
}

const Preset: React.FC<IProps> = async ({ title, timestamp, index }) => {
	const t = await getTranslations();

	return (
		<div className={classes.container}>
			<Typography variant='headingLarge'>{title}</Typography>
			<Typography variant='displaySmall'>{timestamp}</Typography>
			<Typography variant='labelLarge'>
				{t.rich('preset_label', {
					span: (children) => <span>{children}</span>,
					index: index + 1,
				})}
			</Typography>
		</div>
	);
};

export default Preset;
