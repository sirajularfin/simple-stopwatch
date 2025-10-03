import { getTranslations } from 'next-intl/server';
import React from 'react';

import Typography from '../Typography/Typography';
import classes from './style.module.scss';

const MainHeader: React.FC = async () => {
	const t = await getTranslations();

	return (
		<header className={classes.container}>
			<ul>
				<Typography variant='listItem'>{t('headerItems_stopwatch')}</Typography>
				<Typography variant='listItem'>{t('headerItems_timer')}</Typography>
			</ul>
		</header>
	);
};

export default MainHeader;
