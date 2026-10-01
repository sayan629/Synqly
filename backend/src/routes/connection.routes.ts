import {Router} from 'express'
import { requireSession } from '../middleware/requireSession.js';
import { getCalendarConnection } from '../services/connection.services.js';


export const connectionRouter = Router();

connectionRouter.use(requireSession)

connectionRouter.get("/", async(req, res)=>{
    try {
        const connection = await getCalendarConnection(req.auth!.userId)

        res.json({connection})
        
    } catch {
        res.status(500).json({error: "could not load connections"})
    }
})