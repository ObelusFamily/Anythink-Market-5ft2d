const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI);
require("./models/User");
require("./models/Item");

const crypto = require("crypto");

const User = mongoose.model("User");
const Item = mongoose.model("Item");

async function seedUser() {
  const username = crypto.randomUUID().split("-")[0];
  const pass = crypto.randomUUID().split("-")[1];
  const user = new User();
  user.username = `seed${username}`;
  user.email = `seed${username}@seed.com`;
  user.setPassword(pass);
  try {
    await user.save();
    return user._id;
  } catch (err) {
    console.error("error seeding user", err);
  }
}

async function seedItem(userId) {
  const uuid = crypto.randomUUID().split("-")[0];
  const item = new Item();
  item.slug = `itemSlug${uuid}`;
  item.title = "kitten";
  item.description = "cute kitten";
  item.image = "https://placekitten.com/200/300";
  item.tagList = ["seed", "test"];
  item.seller = userId;
  try {
    await item.save();
    return item._id;
  } catch (err) {
    console.error("error seeding item", err);
  }
}

async function populate() {
  await User.deleteMany({});
  await Item.deleteMany({});
  for (let i = 0; i < 10; i++) {
    const userId = await seedUser();
    await seedItem(userId);
  }
  console.log("seeded users and items");
}

(async () => {
  await populate();
  process.exit();
})();
