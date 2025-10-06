export const toInt = (v?: string | null) => {
  const n = Number((v ?? '').trim());
  return Number.isFinite(n) ? n : 0;
};

export const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));
