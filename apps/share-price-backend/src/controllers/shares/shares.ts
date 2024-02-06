import { Request, Response } from 'express';

const getAll = (getAllUseCase) => async (req: Request, res: Response) => {
  const response = await getAllUseCase(req.body);
  return res.status(response.statusCode).send(response.body);
};

const getOne = (getOneUseCase) => async (req: Request, res: Response) => {
  const response = await getOneUseCase(req.params.id, req.body);
  return res.status(response.statusCode).send(response.body);
};

export default { getAll, getOne };
