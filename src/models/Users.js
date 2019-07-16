const mongoose = require('mongoose')

const  UserSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true
  },
  atendimento: {
    type: Number
  },
  qualidade: {
    type: Number
  },
  entrega: {
    type: Number
  },
  avaliacao: {
    type: String
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User