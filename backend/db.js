const mongoose = require("mongoose");

const mongoURI = "mongodb://0.0.0.0:27017/gofoodmern";

const FoodCategory = mongoose.model("foodCategory", {
  CategoryName: String,
});

const FoodItem = mongoose.model("food_items", {
  CategoryName: String,
  name: String,
  img: String,
  options: Array,
  description: String,
});

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log("Connected to MongoDB");

    global.food_category = await FoodCategory.find({});
    global.food_items = await FoodItem.find({});

    //console.log(global.food_items);
    //console.log(global.food_category);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
