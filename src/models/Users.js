const mongoose = require('mongoose')

const  UserSchema = mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  atendimentoTel: {
    type: Number,
  },
  qualidade: {
    type: Number,
  },
  tmpEspera: {
    type: Number,
  },
  tmpMotoboy: {
    type: Number,
  },
  avaliacao: {
    type: String
  }
})

const User = mongoose.model('User', UserSchema)
module.exports = User