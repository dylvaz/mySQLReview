const db = require('./index');
const seed = [
  {
    name: 'Kiwi',
    price: 3,
    rating: 10
  },
  {
    name: 'Protein Bar',
    price: 2,
    rating: 8
  },
  {
    name: 'Cereal',
    price: 2,
    rating: 9
  },
  {
    name: 'Scrambled Eggs',
    price: 1,
    rating: 10
  },
  {
    name: 'Pizza',
    price: 9,
    rating: 8
  }
];

let seedMe = () => {
  seed.forEach((food, index) => {
    db.query(`Insert INTO Food (name, price, rating) VALUES("${food.name}", ${food.price}, ${food.rating});`, (err, res) => {
      if (err) {
        console.log('seed failed');
      } else {
        console.log('seed succeeded');
      }
    });
  });
  db.end();
};

seedMe();
