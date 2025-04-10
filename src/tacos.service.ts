import { Tacos } from './db/databaseContext';
import { Taco } from './db/tacoSchema';

export async function getAllTacos(): Promise<Taco[]> {
  return Tacos.find<Taco>({});
}

export async function createTaco(taco: Taco) {
  const newTaco = new Tacos(taco);
  await newTaco.save();
}
