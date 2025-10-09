import { useTranslations } from 'next-intl';
import classes from './style.module.scss';

export default function Stopwatch() {
  const t = useTranslations('stopwatch_lap');

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
        <tr>
          <td scope="row" align="left">
            1
          </td>
          <td scope="row" align="center">
            00:00:01
          </td>
          <td scope="row" align="right">
            00:00:01
          </td>
        </tr>
      </tbody>
    </table>
  );
}
