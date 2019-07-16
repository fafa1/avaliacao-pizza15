<template>
  <div class="container">
    <img class="m-5" id="center" src="./assets/pizzaHut.png">
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App'
}
</script>

<style>
.container {
  margin-top: 10vh;
  margin-bottom: 10vh;
  overflow-x: hidden;

}

#center {
  padding-left: 30px;
}
</style>
