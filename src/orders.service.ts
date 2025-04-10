import { Orders } from './db/databaseContext';
import { Order } from './db/orderSchema';

export async function getAllOrders(): Promise<Order[]> {
  return Orders.find<Order>({});
}

export async function createOrder(order: Order) {
  const newOrder = new Orders(order);
  await newOrder.save();
}
