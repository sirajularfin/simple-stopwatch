import { useTranslations } from 'next-intl';

export default function Stopwatch() {
  const t = useTranslations('stopwatch_lap');

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">{t('lap_number')}</th>
          <th scope="col">{t('lap_time')}</th>
          <th scope="col">{t('split_time')}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>00:00:01</td>
        </tr>
      </tbody>
    </table>
  );
}
