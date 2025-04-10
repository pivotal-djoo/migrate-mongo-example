import mongoose from 'mongoose';

import { Taco, TacosSchema } from './tacoSchema';

// Mongoose's built in promise library is deprecated, replace it with ES2015 Promise
mongoose.Promise = global.Promise;

const mongoDBUrl =
  'mongodb://root:example@localhost:27017/migrate-mongo-example-db?authSource=admin';

const dbConnection = mongoose.createConnection(mongoDBUrl);

const Tacos = dbConnection.model<Taco>('Tacos', TacosSchema);

export { Tacos };
