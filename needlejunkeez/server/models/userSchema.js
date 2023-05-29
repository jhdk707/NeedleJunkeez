const mongoose = require("mongoose");

const { Schema } = mongoose;
// user schema to fine and compare users in the database
const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema, "users");

module.exports = { userSchema, User };
