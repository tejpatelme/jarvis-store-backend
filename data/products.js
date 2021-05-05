const faker = require("faker");

faker.seed(123);

const fakeProducts = [...Array(30)].map((_) => ({
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  brand: faker.lorem.word(),
  inStock: faker.datatype.boolean(),
  fastDelivery: faker.datatype.boolean(),
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  color: faker.commerce.color(),
}));

module.exports = fakeProducts;
