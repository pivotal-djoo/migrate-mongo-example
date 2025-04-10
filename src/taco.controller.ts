import { Request, Response, Router, type NextFunction } from 'express';
import { createTaco, getAllTacos } from './tacos.service';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  getAllTacos()
    .then((tacos) => {
      res.status(200).json(tacos);
    })
    .catch(next);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  createTaco(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
});

export default router;
