import express, { Express, Request, Response} from 'express';
import { config } from 'dotenv';
import { list, task } from './routes';

config();

const app: Express = express();

app.use(express.json());

list(app);
task(app);

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: "Welcome to Nonso's API"
  })
});



export default app;