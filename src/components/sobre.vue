<template>
  <div class="m-5">
    <nav class="mt-4 mb-3">
      <router-link to="/">Home</router-link>
    </nav>

    <p>Por favor faça sua avaliação.</p>


    <!-- <div class="teste">
    
      <div class="d-flex flex-column p-2 mb-3">
        <div class="align-self-end">1</div>
        <div class="align-self-center">2</div>
        <div class="align-self-start">3</div>
      </div>

        <div class="mb-5">1</div>
        <div class="my-5 mx-5 pt-5 pb-5" >5</div>
    </div> -->
    <h3>Atendimento</h3>
    <vue-stars name="nome1" v-model="valor"></vue-stars>

    <h3>Qualidade da pizza</h3>
    <vue-stars name="nome2" v-model="valor2"></vue-stars>

    <h3>Entrega</h3>
    <vue-stars name="nome3"  v-model="valor3"></vue-stars>

    <h3>....</h3>
    <vue-stars name="nome4" v-model="valor4"></vue-stars>

    <h3>....</h3>
    <vue-stars name="nome5" v-model="valor5"></vue-stars>

    <b-row class="mt-2">
      <b-col sm="6">
        <label for="textarea-large">Digite suas considerações</label>
      </b-col>
      <b-col :sm="10">
        <b-form-textarea
          id="textarea-large"
          size="lg"
          placeholder="Sua avaliação"
        ></b-form-textarea>
      </b-col>
    </b-row>
    <br>
    <b-button variant="success">Enviar</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valor: 3,
      valor2: 3,
      valor3: 3,
      valor4: 3,
      valor5: 3
    }
  },

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
