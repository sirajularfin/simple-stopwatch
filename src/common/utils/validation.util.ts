import { z } from 'zod';

export const timeTickSchema = z.object({
  hour: z.number().int().min(0),
  minute: z.number().int().min(0).max(59),
  second: z.number().int().min(0).max(59),
});
