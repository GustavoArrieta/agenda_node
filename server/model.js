const mongoose = require('mongoose')

const Schema = mongoose.Schema

let UserSchema = new Schema({
  usuario: { type: String, required: true },
  contraseña: { type: Number, required: true, unique: true}
 
 })

let UserModel = mongoose.model('Usuario', UserSchema)

module.exports = UserModel
