import axios from 'axios'

export default {

  nomeUsuario: (nome) => {
    return axios.post('https://avaliacao-pizza15.herokuapp.com/avaliacao', {nome})
  },

  avaliacao: (nome, atendimentoTel, qualidade, tmpEspera, tmpMotoboy, avaliacao) => {
    // fazer a mesma coisa do login
    return axios.post('https://avaliacao-pizza15.herokuapp.com/avaliacao', {
      nome,
      atendimentoTel,
      qualidade,
      tmpEspera,
      tmpMotoboy,
      avaliacao
    })
  }
}