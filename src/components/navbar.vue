<template>

     <div>
  <b-navbar class="m" toggleable="lg" type="dark" variant="primary" >
    <b-navbar-brand href="#">ITLP</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" exact to="/pago">Pago</b-nav-item>
        <b-nav-item href="#" exact to="/kardex">Kardex</b-nav-item>
        <b-nav-item href="#" exact to="/cargaAcademica">Carga Academica</b-nav-item>
        <b-nav-item href="#" exact to="/docentes">Docentes</b-nav-item>
        <b-nav-item href="#" exact to="/materias">Materias</b-nav-item>
        <b-nav-item href="#" exact to="/busquedaAlumnos">Busqueda Alumno</b-nav-item>
        <b-nav-item href="#" exact to="/carreras">Carreras</b-nav-item>
        <b-nav-item href="#" exact to="/horario">Horario</b-nav-item>
       
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        
        <b-nav-item href="#" @click=" clearSession()">Cerrar Sesion</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
    methods:{
      clearSession(){
        localStorage.removeItem("dataUser");
        location.reload();
      }
  }
}
</script>