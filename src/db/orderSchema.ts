import { Schema } from 'mongoose';

export interface Taco {
  name: string;
  ingredients: string[];
  isSpicy: boolean;
  price: number;
  hardShell: boolean;
}

export interface Side {
  name: string;
  toppings: string[];
  price: number;
}

export interface Order {
  tacos: Taco[];
  sides: Side[];
  customerName: string;
  orderNumber: number;
  totalPrice: number;
}

export const OrdersSchema = new Schema<Order>(
  {
    tacos: [
      {
        name: { type: String },
        ingredients: [{ type: String }],
        isSpicy: { type: Boolean },
        price: { type: Number },
        hardShell: { type: Boolean },
      },
    ],
    sides: [
      {
        name: { type: String },
        toppings: [{ type: String }],
        price: { type: Number },
      },
    ],
    customerName: { type: String },
    orderNumber: { type: Number },
    totalPrice: { type: Number },
  },
  {
    collection: 'orders',
  },
);
