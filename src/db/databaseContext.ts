import mongoose from 'mongoose';

import { Order, OrdersSchema } from './orderSchema';

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise;

const mongoDBUrl =
  'mongodb://root:example@localhost:27017/migrate-mongo-example-db?authSource=admin';

const dbConnection = mongoose.createConnection(mongoDBUrl);

const Orders = dbConnection.model<Order>('Tacos', OrdersSchema);

export { Orders };
