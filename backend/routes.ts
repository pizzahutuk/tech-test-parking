// EXAMPLE ONLY. REMOVE OR EDIT AS NEEDED.

import { Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import handler from './handler';

const route = Router();

route.get('/wobble', asyncHandler(handler));

export default route;
