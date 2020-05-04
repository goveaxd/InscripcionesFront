<template>
  <div id="app">
    <navbar id="#nav"></navbar>
    <horario></horario>
  </div>
</template>

<script>
import menu from '@/components/menu'
import cDocentes from '@/components/consultarDocentes'
import cMaterias from '@/components/consultarMateriasPCarrera'
import horario from '@/components/horario'
import navbar from '@/components/navbar'
import kardex from '@/components/kardex.vue'


export default {
  name: 'App',
  components: {

    menu,cDocentes,cMaterias,kardex, horario,navbar

  }
}
</script>

<style>
#nav{
  margin-top: -60px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
