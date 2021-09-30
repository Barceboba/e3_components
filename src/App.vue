<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/blogo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
   <!--  <pare>
      <template v-slot:header>
        <h5 class="modal-title" id="exampleModalLabel">Modal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </template>

      <template v-slot:body>
        ...
      </template>

      <template v-slot:footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tancar</button>
        <button type="button" class="btn btn-primary">Desa els canvis</button>
      </template>

    </pare> -->
    <Pare></Pare>
  </div>
</template>

<script>
import Pare from './components/Pare.vue'
//import ModalBootstrap from './components/ModalBootstrap.vue'
//import Pare from '../components/Pare.vue'

export default {
  name: 'App',
  components: {
   // HelloWorld,
    //ModalBootstrap
    Pare
  }
  
}
  
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
