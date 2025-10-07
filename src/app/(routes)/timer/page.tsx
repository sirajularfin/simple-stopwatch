'use client';

import { formatTime } from '@/common/utils/time.util';
import Preset from '@/components/Preset/Preset';
import { useTimer } from '@/contexts/timer/TimerProvider';
import { useMemo } from 'react';
import classes from './style.module.scss';

export default function Timer() {
  const { state } = useTimer();

  const presets = useMemo(() => {
    const normalizedPresets =
      state.storedPresets && !Array.isArray(state.storedPresets)
        ? state.storedPresets
        : {};
    return Object.entries(normalizedPresets).map(([key, value]) => ({
      key,
      value,
    }));
  }, [state.storedPresets]);

  return (
    <div className={classes.container}>
      <div className={classes.presets}>
        {presets.map(({ key, value }, index) => (
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
