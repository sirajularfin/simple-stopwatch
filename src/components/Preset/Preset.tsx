import React from 'react';

import Typography from '../Typography/Typography';
import classes from './style.module.scss';

interface IProps {
	index: number;
	title: string;
	timestamp: string;
}

const Preset: React.FC<IProps> = ({ title, timestamp, index }) => {
	return (
		<div className={classes.container}>
			<Typography>{title}</Typography>
			<p>{timestamp}</p>
			<span>Preset Number: {index}</span>
		</div>
	);
};

export default Preset;
