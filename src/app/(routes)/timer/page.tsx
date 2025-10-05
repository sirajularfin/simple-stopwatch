import { Metadata } from 'next';

import Preset from '@/components/Preset/Preset';
import classes from './style.module.scss';

export const metadata: Metadata = {
  title: 'Timer - Stopwatch App',
  description: 'A simple timer application built with Next.js',
};

export default async function Timer() {
  return (
    <div className={classes.container}>
      <div className={classes.presets}>
        <Preset title={'Study Time'} timestamp="25:00" index={1} />
        <Preset title={'Study Time'} timestamp="25:00" index={1} />
      </div>
    </div>
  );
}
