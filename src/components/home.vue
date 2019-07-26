<template>
  <div>
    <h2 id="color">
      Obrigado pelo seu feedback!
      <p>&#9996;</p>
    </h2>
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
  color: #000;
}
</style>
