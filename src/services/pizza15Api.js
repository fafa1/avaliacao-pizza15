import axios from 'axios'

export default {

  nomeUsuario: (nome) => {
    return axios.post('http://localhost:3000/avaliacao', {nome})
  },

  avaliacao: (nome, atendimentoTel, qualidade, tmpEspera, tmpMotoboy, avaliacao) => {
    debugger
    // fazer a mesma coisa do login
    return axios.post('http://localhost:3000/avaliacao', {
      nome,
      atendimentoTel,
      qualidade,
      tmpEspera,
      tmpMotoboy,
      avaliacao
    })
  }
}