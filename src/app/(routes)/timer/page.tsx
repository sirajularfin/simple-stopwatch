'use client';

import { formatTime } from '@/common/utils/time.util';
import Preset from '@/components/Preset/Preset';
import { useTimer } from '@/contexts/timer/TimerProvider';
import classes from './style.module.scss';

export default function Timer() {
  const { state } = useTimer();

  return (
    <div className={classes.container}>
      <div className={classes.presets}>
        {Object.entries(state.storedPresets).map(([key, value], index) => (
          <Preset
            key={`${key}-${index}`}
            index={index}
            title={key}
            timestamp={formatTime(value as number)}
          />
        ))}
      </div>
    </div>
  );
}
