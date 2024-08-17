import mongoose, { connect } from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dipen123:nepal123@cluster0.lqpld.mongodb.net/food-del"
    )
    .then(() => console.log("DB Connected"));
};
