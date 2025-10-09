'use client';

import classNames from 'classnames';
import { useTranslations } from 'next-intl';
import React from 'react';

import { extractMinMaxLapTime } from '@/common/utils/number.util';
import { formatTimeWithMs } from '@/common/utils/time.util';
import { useStopwatch } from '@/contexts/stopwatch/StopwatchProvider';
import classes from './style.module.scss';

const Stopwatch: React.FC = () => {
  const t = useTranslations('stopwatch_lap');

  const { state } = useStopwatch();
  const { minLapMs, maxLapMs } = React.useMemo(
    () => extractMinMaxLapTime(state.lap),
    [state.lap]
  );

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
        {state.lap.map((lap, index) => {
          const isFastest = minLapMs !== null && lap[0] === minLapMs;
          const isSlowest =
            !isFastest && maxLapMs !== null && lap[0] === maxLapMs;
          const icon = isFastest ? '🏁' : isSlowest ? '🐢' : null;

          return (
            <tr key={state.lap.length - index}>
              <td
                align="left"
                className={classNames([
                  isSlowest ? classes.SLOWEST_LAP : '',
                  isFastest ? classes.FASTEST_LAP : '',
                ])}
              >
                {
                  <span
                    aria-label={isFastest ? t('fastest') : t('slowest')}
                    className={
                      icon ? classes.rowsWithIcon : classes.rowsWithoutIcon
                    }
                  >
                    {icon}
                  </span>
                }
                {state.lap.length - index}
              </td>
              <td
                align="center"
                className={classNames([
                  isSlowest ? classes.SLOWEST_LAP : '',
                  isFastest ? classes.FASTEST_LAP : '',
                ])}
              >
                {formatTimeWithMs(lap[0])}
              </td>
              <td
                align="right"
                className={classNames([
                  isSlowest ? classes.SLOWEST_LAP : '',
                  isFastest ? classes.FASTEST_LAP : '',
                ])}
              >
                {formatTimeWithMs(lap[1])}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Stopwatch;
