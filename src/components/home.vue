<template>
  <div>
    <h2 id="color">{{msg}}</h2>
    <b-row class="my-1">
      <b-col sm="4">
        <label for="input-default">Nome e Sobrenome:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-default" v-model="nome" placeholder="Digite seu nome"></b-form-input>
      </b-col>
    </b-row>
    <nav class="mb-3 mt-3">
      <b-button @click="proximo" variant="success">Próximo</b-button>
      <!-- <router-link  to="sobre">Próximo</router-link> -->
    </nav>
  </div>
</template>

<script>
import ratings from '../services/pizza15Api'

export default {
  name: 'home',
  data () {
    return {
      msg: 'PIZZA 15',
      nome: ''
    }
  },

  methods: {
    async proximo () {
      debugger
      let nomeSave = await ratings.nomeUsuario(this.nome)
      // this.$root.$emit('home-nome', this.nome)
      this.$router.push('sobre')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#color {
  color: rgb(30, 37, 30);
}
</style>
