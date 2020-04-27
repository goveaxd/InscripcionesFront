<template>
    <div>
        <br>
        <h1><strong> DOCENTES </strong></h1>
        <div>
            <br>
            <div>
                 <b-button-group>
 <h2>Departamento</h2> <b-dropdown id="dropdown-1" text="Seleccionar Departamento" class="m-md-2" variant="outline-primary">
    <b-dropdown-item>Ciencias Básicas</b-dropdown-item>
    <b-dropdown-item>Ingeniería Industrial</b-dropdown-item>
    <b-dropdown-item>Química y Bioquímica</b-dropdown-item>
    <b-dropdown-item>Sitemas y Computación</b-dropdown-item>
     <b-dropdown-item>Electrónica y Mecatrónica</b-dropdown-item>
    <b-dropdown-item>Ciencias Economico Administrativo</b-dropdown-item>
    <b-dropdown-item>Departamento de Desarrollo Academico</b-dropdown-item>
    <b-dropdown-item>Departamento de División de Estudios Profesionales</b-dropdown-item>
   
  </b-dropdown>
   </b-button-group>
            </div>
</div>

<br>
<div>
    <b-table striped hover :items="items"></b-table>
  </div>
    </div>    
</template>

<script>
export default {
    data() {
      return {
        items: [
          {Nombre: 'El Heris', RFC: 'HX7SWD7D' },
          {Nombre: 'Estela', RFC: 'JC7SD8AS' },
          {Nombre: 'Laura Elena', RFC: 'SIDNCW322' },
          {Nombre: 'Teresita', RFC: 'M7D6S6S' }
        ]
      }
    }
}
</script>