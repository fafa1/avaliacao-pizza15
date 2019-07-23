<template>
  <div class="m-5">
    <nav class="mt-4 mb-3">
      <!-- <router-link to="/">Home</router-link> -->
    </nav>

    <p>Por favor faça sua avaliação.</p>
    <br>
    <p>Primeiro digite seu nome e Sobrenome porfavor!</p>


    <!-- <div class="teste">
    
      <div class="d-flex flex-column p-2 mb-3">
        <div class="align-self-end">1</div>
        <div class="align-self-center">2</div>
        <div class="align-self-start">3</div>
      </div>

        <div class="mb-5">1</div>
        <div class="my-5 mx-5 pt-5 pb-5" >5</div>
    </div> -->
    <b-row class="my-1">
      <b-col sm="4">
        <label for="input-default">Nome e Sobrenome:</label>
      </b-col>
      <b-col sm="10">
        <b-form-input id="input-default" v-model="nomeUsuario" placeholder="Digite seu nome"></b-form-input>
      </b-col>
    </b-row>
    <br>

    <div v-if="this.nomeUsuario.length >= 6">
    <h3>Atendimento Telefone</h3>
    <vue-stars name="nome1" v-model="atendimentoTel"></vue-stars>

    <h3>Qualidade da pizza</h3>
    <vue-stars name="nome2" v-model="qualidade"></vue-stars>

    <h3>Tempo de Espera</h3>
    <vue-stars name="nome3"  v-model="tmpEspera"></vue-stars>

    <h3>Atendimento Motoboy</h3>
    <vue-stars name="nome4" v-model="tmpMotoboy"></vue-stars>

    <!-- <h3>....</h3>
    <vue-stars name="nome5" v-model="valor5"></vue-stars> -->

    <b-row class="mt-2">
      <b-col :sm="9">
        <label for="textarea-large">Deixe suas sugestões caso tenha alguma!</label>
      </b-col>
      <b-col :sm="10">
        <b-form-textarea
          v-model="avaliacao"
          id="textarea-large"
          size="lg"
          placeholder="Sua avaliação"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <br>
    <b-button @click="enviar" variant="success">Enviar</b-button>
  </div>
  </div>
</template>

<script>
import ratings from '../services/pizza15Api'
export default {

  data() {
    return {
      atendimentoTel: 3,
      qualidade: 3,
      tmpEspera: 3,
      tmpMotoboy: 3,
      avaliacao: '',
      nomeUsuario: ''
    }
  },

  methods: {
    contNome () {
      this.nomeUsuario
    },

    valor (nome) {
      console.log(nome)
    },
    async enviar () {
      let resul = await ratings.avaliacao(this.nomeUsuario,this.atendimentoTel,this.qualidade, this.tmpEspera, this.tmpMotoboy, this.avaliacao)
      // debugger
      // resul.data
      if(resul.status !== 201) return 
      this.$router.push('home')
    }
  }

}
</script>

<style>
  .vue-stars {
    font-size: 150%
  }

  .teste div {
    border: solid 2px #000
  }

</style>
