import classNames from 'classnames';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import Typography from '../Typography/Typography';
import classes from './style.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string[];
}

const TextInput: React.FC<IProps> = async ({ error, ...props }) => {
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
