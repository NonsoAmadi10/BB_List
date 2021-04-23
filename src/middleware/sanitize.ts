import { Request, Response, NextFunction } from 'express';

const listSanitizer = (req: Request, res: Response, next: NextFunction) => {
  const { listName } = req.body;
  const error = (message:string) => res.status(400).send({ message})
  const emptyValidator = /^$/;
  const alphaString = /\w/;
  
  if (emptyValidator.test(listName)) return error('Please Provide a list name');
  if (!alphaString.test(listName)) return error('Please your list name should be an alphabet!');

  return next();
}

const taskSanitizer = (req: Request, res: Response, next: NextFunction) => {
  const { listId, task } = req.body;
  const error = (message:string) => res.status(400).send({ message})
  const emptyValidator = /^$/;
  const alphaString = /\w/;
  
  if (emptyValidator.test(listId)) return error('Please Provide a list name');
  if (emptyValidator.test(task)) return error('Please Provide a task name');
  if (!alphaString.test(listId)) return error('Please your list ID should be an alphabet!');
  if (!alphaString.test(task)) return error('Please your task name should be an alphabet!');

  return next();
}


export { listSanitizer, taskSanitizer };