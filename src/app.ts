  
import express, { Express} from 'express';
import { config } from 'dotenv';

config();

const app: Express = express();

app.use(express.json());



export default app;