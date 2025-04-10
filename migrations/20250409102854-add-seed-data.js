const tacoData = [
  {
    name: 'Classic Beef Taco',
    ingredients: ['beef', 'lettuce', 'cheddar', 'salsa'],
    isSpicy: false,
    price: 3.99,
  },
  {
    name: 'Spicy Chicken Taco',
    ingredients: ['chicken', 'jalapeños', 'sour cream', 'cheese'],
    isSpicy: true,
    price: 4.49,
  },
  {
    name: 'Veggie Supreme Taco',
    ingredients: ['black beans', 'corn', 'avocado', 'lettuce'],
    isSpicy: false,
    price: 3.49,
  },
];

// eslint-disable-next-line no-undef
module.exports = {
  async up(db) {
    await db.collection('tacos').insertMany(tacoData);
  },

  async down(db) {
    await db.collection('tacos').deleteMany({
      name: { $in: tacoData.map((taco) => taco.name) },
    });
  },
};
