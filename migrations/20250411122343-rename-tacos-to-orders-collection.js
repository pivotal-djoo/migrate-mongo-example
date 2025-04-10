// eslint-disable-next-line no-undef
module.exports = {
  async up(db) {
    const tacos = await db.collection('tacos').find().toArray();

    if (tacos.length === 0) {
      console.log('No tacos to migrate.');
      return;
    }

    const orders = tacos.map((taco, index) => ({
      tacos: [taco],
      sides: [],
      customerName: `${taco.name} order`,
      orderNumber: index,
      totalPrice: taco.price,
    }));

    await db.collection('orders').insertMany(orders);
    await db.collection('tacos').drop();
  },

  async down(db) {
    const orders = await db.collection('orders').find().toArray();

    if (orders.length === 0) {
      console.log('No orders to migrate down.');
      return;
    }

    const tacos = orders.map((order) => order.tacos[0]);

    await db.collection('tacos').insertMany(tacos);
    await db.collection('orders').drop();
  },
};
