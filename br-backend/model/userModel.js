const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  contactNumber: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  city: {
    type: String,
  },
  street: {
    type: String,
  },
  deliveryDescription: {
    type: String,
  },
  role: {
    type: String,
  },
});

userSchema.pre("save", async (next) => {
  const user = this;
  if (!user.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

const User = mongoose.model("User", userSchema);
module.exports = User;
