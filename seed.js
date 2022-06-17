require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'American', sortOrder: 10},
    {name: 'Indian', sortOrder: 20},
    {name: 'Mexican', sortOrder: 30},
    {name: 'Italian', sortOrder: 40},
    {name: 'Korean', sortOrder: 50},
    {name: 'Thai', sortOrder: 60},
    {name: 'Japanese', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Bennetts American Cooking', emoji: '2232 Fair Oaks Blvd, Sacramento, CA 95825', category: categories[0], price: 4.5},
    {name: 'Localis', emoji: '2031 S St, Sacramento, CA 95811-6819', category: categories[0], price: 4.5},
    {name: 'Bacon & Butter', emoji: '5913 Broadway, Sacramento, CA 95820-1841', category: categories[0], price: 4.5},
    {name: 'Shagun Indian Cuisine', emoji: '7511 Watt Ave Ste 107 North Highlands, CA 95660', category: categories[1], price: 4.5},
    {name: 'Curry Club', emoji: '1401 O St Sacramento, CA 95814', category: categories[1], price: 4.5},
    {name: 'Pooja Indian Grill', emoji: '1223-25 Merkley Ave West Sacramento, CA 95691', category: categories[1], price: 4},
    {name: 'Namaste Food Truck', emoji: '8531 Thys Ct Sacramento, CA 95828', category: categories[1], price: 5},
    {name: 'Tres Hermanas Mexican Restaurant', emoji: '2416 K St, Sacramento, CA 95816-5002', category: categories[2], price: 4.5},
    {name: 'Tequila Museo Mayahuel', emoji: '1200 K St, Sacramento, CA 95814-3950', category: categories[2], price: 4},
    {name: 'Chicago Fire', emoji: '2416 J St, Sacramento, CA 95816-4806', category: categories[3], price: 4.5},
    {name: 'OBO Italian Table & Bar', emoji: '3145 Folsom Blvd, Sacramento, CA 95816-5218', category: categories[3], price: 4},
    {name: 'Oz Korean BBQ Restaurant', emoji: '3343 Bradshaw Rd, Sacramento, CA 95827-2606', category: categories[4], price: 4.5},
    {name: 'Blue House Korean BBQ', emoji: '1030 Howe Ave, Sacramento, CA 95825-3907', category: categories[4], price: 4.5},
    {name: 'Lemon Grass', emoji: '601 Munroe St, Sacramento, CA 95825-6416', category: categories[5], price: 4.5},
    {name: 'The Coconut Midtown', emoji: '2502 J St, Sacramento, CA 95816-4815', category: categories[5], price: 4.5},
    {name: 'Thai Hut', emoji: '5800 Madison Ave Ste K, Sacramento, CA 95841-4816', category: categories[5], price: 4.5},
    {name: 'House Of Thai Rice & Noodle', emoji: '5738 Watt Ave North Highlands, Sacramento, CA 95660-4773', category: categories[5], price: 4.5},
    {name: 'Mikuni Japanese Restaurant & Sushi Bar', emoji: '1530 J St, Sacramento, CA 95814-2052', category: categories[6], price: 4.5},
    {name: 'Kru Contemporary Japanese Cuisine', emoji: '3135 Folsom Blvd, Sacramento, CA 95816-5218', category: categories[6], price: 4.5},
    {name: 'Akebono', emoji: '4960 Freeport Blvd, Sacramento, CA 95822-2153', category: categories[6], price: 4.5},
    {name: 'Ramen House Ryujin', emoji: '1831 S St, Sacramento, CA 95811-6762', category: categories[6], price: 4.5},
    {name: 'Osaka Sushi', emoji: '1200 K St Suite 7, Sacramento, CA 95814-3950+', category: categories[6], price: 4.5},
  ]);

  console.log(items)

  process.exit();

})();