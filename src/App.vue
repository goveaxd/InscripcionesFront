<template>
  <div id="app">
    <navbar></navbar>
    <cargaAcademica></cargaAcademica>



  </div>
</template>

<script>

import cDocentes from '@/components/consultarDocentes'
import cMaterias from '@/components/consultarMateriasPCarrera'
import prueba from '@/components/prueba'

import horario from '@/components/horario'
import consultaCarreras from '@/components/consultaCarreras'
import kardex from '@/components/kardex.vue'
import cargaAcademica from '@/components/cargaAcademica'
import navbar from '@/components/navbar'


export default {
  name: 'App',
  components: {
    cDocentes,cMaterias,kardex,prueba,horario, consultaCarreras,cargaAcademica,navbar
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
}

#navbar{
  margin-top: -60px;
  background-color: #1D2F62;
}
</style>
