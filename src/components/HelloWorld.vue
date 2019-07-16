<template>
  <div>
    <h2>{{msg}}</h2>
    <b-row class="my-1">
      <b-col sm="4">
        <label for="input-default">Nome:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-default" placeholder="Digite seu nome"></b-form-input>
      </b-col>
    </b-row>
    <nav class="mb-3 mt-3">
      <router-link  to="sobre">Próximo</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'PIZZA 15'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#center {
  text-align: center;
}
</style>
