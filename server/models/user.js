const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const bcrypt = require("bcrypt-nodejs");

const UserSchema = new Schema({
  name: String,
  email: { type: String, sparse: true, required: true },
  password: { type: String, required: true },
//   address: { type: Schema.Types.ObjectId, ref: "Address" }
});


module.exports = mongoose.model('User', UserSchema)