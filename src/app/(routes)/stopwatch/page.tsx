'use client';

import { useTranslations } from 'next-intl';
import React from 'react';

import { formatTimeWithMs } from '@/common/utils/time.util';
import { useStopwatch } from '@/contexts/stopwatch/StopwatchProvider';
import classes from './style.module.scss';

const Stopwatch: React.FC = () => {
  const t = useTranslations('stopwatch_lap');

  const { state } = useStopwatch();

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th scope="col" align="left">
            {t('lap_number')}
          </th>
          <th scope="col" align="center">
            {t('lap_time')}
          </th>
          <th scope="col" align="right">
            {t('split_time')}
          </th>
        </tr>
      </thead>
      <tbody>
        {state.lap.map((lap, index) => (
          <tr key={state.lap.length - index}>
            <td align="left">{state.lap.length - index}</td>
            <td align="center">{formatTimeWithMs(lap[0])}</td>
            <td align="right">{formatTimeWithMs(lap[1])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Stopwatch;
