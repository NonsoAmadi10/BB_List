import { Request, Response } from 'express';
import List from '../db/models/List';
import Helpers from '../utils/helperMethods';


/**
 * Class representing the user controller
 * @class ListController
 * @description list controller
 */

class ListController {

 /**
   * creates a list
   * Route: POST: /list
   * @param {object} req - HTTP Request object
   * @param {object} res - HTTP Response object
   * @return {res} res - HTTP Response object
   * @memberof ListController
   */
  static async createList(req:Request, res:Response) {
    const { listName } = req.body;
    try {
      const {dataValues} = await List.create({ listName });
      
      return Helpers.requestSuccessful(res, dataValues , 201);
    } catch (err) {
      console.log(err)
      return Helpers.serverError(res);
    }
  }
}

export default ListController;