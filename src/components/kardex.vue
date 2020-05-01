<template>
<b-container align="left" fluid class="ml-5">
    <div class="mb-4 mt-3" >
      <b-avatar class="mr-7" variant="primary" text="DB" size="6rem"></b-avatar>
    </div>
    
  <b-row>
    <b-col>Daniel Belmonte Diaz</b-col>
  </b-row>
  <b-row>
    <b-col>16640099</b-col>
  </b-row>
  <b-row>
    <b-col>Ing Tecnologias de la Informacion y Comunicaciones</b-col>
  </b-row>
 
     <div class="mt-5">
  <b-table striped hover :items="items"></b-table>
     </div>
</b-container>  
 
</template>

<script>
 export default {
    data() {
      return {
        items: [
          { Semestre: 1, Materia: 'Matematicas Discretas I', Clave_Materia: 'ASDF785JKL', Calificacion:'90' },
          { Semestre: 3, Materia: 'Matematicas aplicadas a las comunicaciones', Clave_Materia: 'RG5678',  Calificacion:'78' },
          { Semestre: 5, Materia: 'Bases de datos distribuidas', Clave_Materia: 'LKJHG4567',  Calificacion:'97' },
          { Semestre: 7, Materia: 'Programacion Back-End', Clave_Materia: 'MNBV8524',  Calificacion:'84' }
        ]
      }
    }
  }
</script>