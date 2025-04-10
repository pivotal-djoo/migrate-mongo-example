import { Schema } from 'mongoose';

export interface Taco {
  name: string;
  ingredients: string[];
  isSpicy: boolean;
  price: number;
}

export const TacosSchema = new Schema<Taco>(
  {
    name: { type: String },
    ingredients: [{ type: String }],
    isSpicy: { type: Boolean },
    price: { type: Number },
  },

  {
    collection: 'tacos',
  },
);
