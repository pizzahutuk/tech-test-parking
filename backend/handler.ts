// EXAMPLE ONLY. REMOVE OR EDIT AS NEEDED.

import { Request, Response } from 'express';
import { Wobbler } from './Wobbler';

const wobbler = new Wobbler();
export default async function (req: Request, res: Response) {
  const result = await wobbler.wobble();
  res.json(result);
}
