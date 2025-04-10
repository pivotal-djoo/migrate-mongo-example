import express from 'express';

import tacosRoutes from './taco.controller';

const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use('/tacos', tacosRoutes);

app.listen(8080, () => {
  console.log('Starting node server on 0.0.0.0:8080');
});

export default app;
