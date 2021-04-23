import { ListController } from '../controllers';
import { listSanitizer } from '../middleware/sanitize';
import { Express } from 'express';


const listRoutes = (app: Express) => {
  app.post('/api/v1/list', listSanitizer, ListController.createList);

}

export default listRoutes;