import { Request, Response } from 'express';
import { Wobbler } from './Wobbler';

export default async function (req: Request, res: Response) {
  const wobbler = new Wobbler();
  const result = await wobbler.wobble();
  res.json(result);
}
