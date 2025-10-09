export const toInt = (v?: string | null) => {
  const n = Number((v ?? '').trim());
  return Number.isFinite(n) ? n : 0;
};

export const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));

export const extractMinMaxLapTime = (laps: number[][]) => {
  if (laps.length === 0)
    return {
      minLapMs: null as number | null,
      maxLapMs: null as number | null,
    };
  let min = laps[0][0];
  let max = laps[0][0];
  for (let i = 1; i < laps.length; i++) {
    const t = laps[i][0];
    if (t < min) min = t;
    if (t > max) max = t;
  }
  return { minLapMs: min, maxLapMs: max };
};
