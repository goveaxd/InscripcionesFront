<template>
  <div id="app">
    <navbar></navbar>
    <sesion></sesion>
    
  </div>
 
</template>

<script>
import busquedaAlumnos from '@/components/busquedaAlumnos'
import cDocentes from '@/components/consultarDocentes'
import cMaterias from '@/components/consultarMateriasPCarrera'
import prueba from '@/components/prueba'
import sesion from '@/components/sesion'
import horario from '@/components/horario'
import consultaCarreras from '@/components/consultaCarreras'
import kardex from '@/components/kardex.vue'
import cargaAcademica from '@/components/cargaAcademica'
import navbar from '@/components/navbar'
import reinscripcionTerminada from '@/components/reinscripcionTerminada'
import comprobacionPago from '@/components/comprobacionPago'

export default {
  name: 'App',
  components: {
    cDocentes, cMaterias,
    kardex, prueba, busquedaAlumnos,
    horario, consultaCarreras,
    cargaAcademica, navbar, 
    reinscripcionTerminada, comprobacionPago,
    sesion
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
