import React from 'react';

import { Logo } from '@/assets';
import LanguageButton from '../LanguageButton/LanguageButton';
import classes from './MainHeader.module.scss';

function MainHeader(): React.ReactElement {
  return (
    <header className={classes.container}>
      <Logo />
      <LanguageButton />
    </header>
  );
}

export default MainHeader;
