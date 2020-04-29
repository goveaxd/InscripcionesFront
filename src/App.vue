<template>
  <div id="app">
    <navbar id="navbar"></navbar>
    <cargaAcademica></cargaAcademica>
    <button id="Consulta materias"></button>

  </div>
</template>

<script>
import menu from '@/components/menu'
import cDocentes from '@/components/consultarDocentes'
import cMaterias from '@/components/consultarMateriasPCarrera'
import navbar from '@/components/navbar'
import cargaAcademica from '@/components/cargaAcademica'

export default {
  name: 'App',
  components: {
    menu,cDocentes,cMaterias,navbar,cargaAcademica
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#navbar{
  margin-top: -60px;
  background-color: #1D2F62;
}
</style>
