'use client';

import { formatTimeWithMs } from '@/common/utils/time.util';
import { useStopwatch } from '@/contexts/stopwatch/StopwatchProvider';
import { useTranslations } from 'next-intl';
import classes from './style.module.scss';

export default function Stopwatch() {
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
          <tr key={index}>
            <td align="left">{index + 1}</td>
            <td align="center">{formatTimeWithMs(lap[0])}</td>
            <td align="right">{formatTimeWithMs(lap[1])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
