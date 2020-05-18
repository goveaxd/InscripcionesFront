<template>

     <div>
  <b-navbar class="m" toggleable="lg" type="dark" variant="primary" >
    <b-navbar-brand href="#">ITLP</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" exact to="/inicio">Inicio</b-nav-item>
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
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#" xact to="/inicio">Sign In</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>