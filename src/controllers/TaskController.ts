import { Request, Response } from 'express';
import List from '../db/models/List';
import Task from '../db/models/Task';
import Helpers from '../utils/helperMethods';


/**
 * Class representing the user controller
 * @class TaskController
 * @description task controller
 */

class TaskController {

 /**
   * creates a list
   * Route: POST: /list
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   * @memberof TaskController
   */
  static async createTask(req:Request, res:Response) {
    const { task, listId } = req.body;
    try {
      const findList = await List.findByPk(listId);
      if (findList) {
        const { dataValues } = await Task.create({ task, listId });
        return Helpers.requestSuccessful(res, dataValues , 201);
      }
      
      return Helpers.clientError(res, 'List not found', 404);
      
    } catch (err) {
      console.log(err)
      return Helpers.serverError(res);
    }
  }
}

export default TaskController;