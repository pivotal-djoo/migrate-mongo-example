import express from 'express';

import ordersRoutes from './orders.controller';

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use('/orders', ordersRoutes);

app.listen(8080, () => {
  console.log('Starting node server on 0.0.0.0:8080');
});

export default app;
