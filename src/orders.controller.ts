import { Request, Response, Router, type NextFunction } from 'express';
import { createOrder, getAllOrders } from './orders.service';

const router = Router();

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  getAllOrders()
    .then((tacos) => {
      res.status(200).json(tacos);
    })
    .catch(next);
});

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
  createOrder(req.body)
    .then(() => {
      res.sendStatus(201);
    })
    .catch(next);
});

export default router;
