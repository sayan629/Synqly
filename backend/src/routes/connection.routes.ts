import {Router} from 'express'
import { requireSession } from '../middleware/requireSession.js';


export const connectionRouter = Router();

connectionRouter.use(requireSession)