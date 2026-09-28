import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express();
const port = Number(process.env.PORT) || 4000;
const appOrigin =  process.env.APP_URL ?? "https://localhost:3000";
