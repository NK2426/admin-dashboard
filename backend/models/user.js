 const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const uniqueValidator = require("mongoose-unique-validator");
const autopopulate = require('mongoose-autopopulate');

/* Here unique is for mongoose internal implementaion to maintain unique email field. 
 * This does not enforce unique validation. Unique validation is handled by mongoose-unique-validator
*/
const userSchema = new Schema({
  name: String,
  phone : { type:Number,required:true,unique:true},
  email: { type: String, required: true, unique: true }, 
  password: { type: String, required: true }, 
  active: Boolean,
  createdBy: ObjectId,
  updatedBy: ObjectId
}, {versionKey: false});
userSchema.plugin(uniqueValidator, autopopulate);

// const createSchema = new Schema({
//   name: String,
//   email: { type: String, required: true, unique: true }, 
//   password: { type: String, required: true }, 
//   phone : { type:Number,required:true,unique:true},
//   active: Boolean,
//   createdBy: ObjectId,
//   updatedBy: ObjectId
// }, {versionKey: false});
// createSchema.plugin(uniqueValidator, autopopulate);

module.exports = mongoose.model("user", userSchema, "user");
// module.exports = mongoose.model("create", createSchema, "create");