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



export { listSanitizer };