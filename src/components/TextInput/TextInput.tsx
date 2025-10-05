import classNames from 'classnames';
import React from 'react';

import { getTranslations } from 'next-intl/server';
import Typography from '../Typography/Typography';
import classes from './style.module.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string[];
  helperText?: string;
}

const TextInput: React.FC<TextInputProps> = async ({
  error,
  helperText,
  ...props
}) => {
  const t = await getTranslations();

  return (
    <div
      className={classNames(classes.inputWrapper, {
        [classes.textInputError]: error,
      })}
    >
      <input className={classes.textInput} {...props} />
      <Typography variant="labelLarge" className={classes.saveBtn}>
        {t('savePreset_button')}
      </Typography>
    </div>
  );
};

export default TextInput;
