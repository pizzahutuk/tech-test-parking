import { Router } from 'express';
import asyncHandler from 'express-async-handler';
import handler from './handler';

const route = Router();

route.get('/wobble', handler);

export default route;
