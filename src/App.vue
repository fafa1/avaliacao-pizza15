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
  overflow-x: hidden;
  text-align: center;
  background-image: linear-gradient(to right, rgba(235, 61, 61, 0.945), #b63f3f);
}

img {
  width: 250px;
  margin-top: 10vh;
  margin-bottom: 5vh;
}

.invisible {
  margin-bottom: 100%;
}

#center {
  /* height: 250px; */
  /* width: 250px; */
}

</style>
