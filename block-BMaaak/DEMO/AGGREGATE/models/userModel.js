var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema(
  {
    name: { type: String },
    username: { type: String },
    email: { type: String },
    address: {
      city: { type: String },
      state: { type: String },
      country: { type: String },
      pin: { type: Number },
    },
  },
  { timestamps: true }
);
userSchema.index({ username: -1, unique: true });
userSchema.index({ email: -1, unique: true });
userSchema.index({ state: -1, unique: true });
userSchema.index({ country: -1, unique: true });
module.exports = mongoose.model('User', userSchema);
