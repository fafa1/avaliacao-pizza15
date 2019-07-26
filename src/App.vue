<template>
  <div class="container">
      <img id="center" src="./assets/pizza15.jpeg">
    <router-view></router-view>
    <div class="invisible"></div>
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
  /* margin-top: 10vh; */
  /* margin-bottom: 10vh; */
  max-width: 900px;
  overflow-x: hidden;
  text-align: center;
  background-image: linear-gradient(180deg, red, green);
}

img {
  width: 250px;
  margin-top: 10vh;
  margin-bottom: 5vh;
}

.invisible {
  margin-bottom: 100%;
}

</style>
