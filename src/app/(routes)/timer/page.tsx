'use client';

import { formatTime } from '@/common/utils/time.util';
import Preset from '@/components/Preset/Preset';
import { useTimer } from '@/contexts/timer/TimerProvider';
import { useMemo } from 'react';
import classes from './style.module.scss';

export default function Timer() {
  const { savedPresets } = useTimer();

  const presets = useMemo(() => {
    if (!savedPresets) return [];
    if (Array.isArray(savedPresets)) {
      return savedPresets.flatMap(obj =>
        Object.entries(obj).map(([key, value]) => ({ key, value }))
      );
    }
    return Object.entries(savedPresets).map(([key, value]) => ({ key, value }));
  }, [savedPresets]);

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
