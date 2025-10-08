import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React from 'react';

import { SaveIcon } from '@/assets';
import Typography from '../Typography/Typography';
import classes from './style.module.scss';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string[];
  onSuffixIconClick?: () => void;
}

const TextInput: React.FC<IProps> = ({
  error,
  onSuffixIconClick,
  ...props
}) => {
  const t = useTranslations();

  return (
    <div
      className={classNames(classes.inputWrapper, {
        [classes.textInputError]: error,
      })}
    >
      <input className={classes.textInput} {...props} />
      <SaveIcon />
      <Typography
        variant="labelLarge"
        className={classes.saveBtn}
        onClick={onSuffixIconClick}
      >
        {t('savePreset_button')}
      </Typography>
    </div>
  );
};

export default TextInput;
