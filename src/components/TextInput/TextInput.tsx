import classNames from 'classnames';
import React from 'react';

import classes from './style.module.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error?: string[];
	helperText?: string;
}

const TextInput: React.FC<TextInputProps> = ({ error, helperText, ...props }) => {
	return (
		<div
			className={classNames(classes.inputWrapper, {
				[classes.textInputError]: error,
			})}>
			<input
				className={classes.textInput}
				{...props}
			/>
		</div>
	);
};

export default TextInput;
