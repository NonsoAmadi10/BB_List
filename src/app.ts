import express, { Express} from 'express';
import { config } from 'dotenv';
import { list } from './routes';

config();

const app: Express = express();

app.use(express.json());

list(app);



export default app;