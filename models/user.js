const mongoose = require("mongoose");
const config = require("config");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role:{
    type: String,
    enum: ["admin", "owner", "renter"]
  },
  averageRating: { type: Number, default: 3 },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() },
});
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      isAdmin: this.isAdmin,
      isOwner: this.isOwner,
      isRenter: this.isRenter,
    },
    config.get("jwtPrivateKey")
  );
  return token;
};
const User = mongoose.model("user", userSchema);
module.exports = User;
