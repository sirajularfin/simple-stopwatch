import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React from 'react';

import Typography from '../Typography/Typography';
import classes from './TextInput.module.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string[];
  helperText?: string;
  customStyle?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const TextInput: React.FC<TextInputProps> = ({
  error,
  helperText,
  customStyle,
  startIcon,
  endIcon,
  ...props
}) => {
  const t = useTranslations();

  return (
    <div className={classes.container}>
      <div
        className={classNames(customStyle, classes.inputWrapper, {
          [classes.textInputError]: error,
        })}
      >
        {startIcon}
        <input className={classes.textInput} {...props} />
        {endIcon}
      </div>
      {Array.isArray(error) && error.length > 0 && (
        <Typography className={classes.error}>{t(error[0])}</Typography>
      )}
      {helperText && (
        <Typography className={classes.helperText}>{helperText}</Typography>
      )}
    </div>
  );
};

export default TextInput;
