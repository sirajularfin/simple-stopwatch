import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { ACTION_TYPES, APPLICATION_MODES } from '@/common/types/constants';
import ActionButton from '@/components/ActionButton/ActionButton';
import DisplayTimer from '@/components/DisplayTimer/DisplayTimer';
import Preset from '@/components/Preset/Preset';
import TextInput from '@/components/TextInput/TextInput';
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
          <DisplayTimer count={5} mode={APPLICATION_MODES.TIMER} />
          <TextInput placeholder={t('savePreset_placeholder')} />
        </div>
        <div className={classes.actionButtons}>
          <ActionButton type={ACTION_TYPES.PLAY} size="LARGE" />
          <ActionButton type={ACTION_TYPES.STOP} size="LARGE" />
        </div>
      </div>
      <div className={classes.presets}>
        <Preset title={'Study Time'} timestamp="25:00" index={1} />
        <Preset title={'Study Time'} timestamp="25:00" index={1} />
      </div>
    </div>
  );
}
