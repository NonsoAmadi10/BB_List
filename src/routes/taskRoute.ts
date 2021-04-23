import { TaskController } from '../controllers';
import { taskSanitizer } from '../middleware/sanitize';
import { Express } from 'express';


const taskRoutes = (app: Express) => {
  app.post('/api/v1/task', taskSanitizer, TaskController.createTask);

}

export default taskRoutes;