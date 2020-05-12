<template>
    
          
    <div>
            <br>
            <b-container align="center" fluid class="ml-5">
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
              <br>
              <h1><strong> HORARIO </strong></h1>
                 <div class="mt-5">
              <b-table striped hover :items="items"></b-table>
                 </div>
            </b-container> 
            
</div>
        
</template>
<script>
    export default {
        data() {
          return {
            items: [
              
              {HORA: '7:00 - 8:00', LUNES:'Base de datos', MARTES:'Base de datos', MIERCOLES:'Base de datos',JUEVES:'DevOps', VIERNES:'Base de datos'},
              {HORA: '8:00 - 9:00', LUNES:'DevOps', MARTES:'Base de datos', MIERCOLES:'DevOps', JUEVES:'DevOps', VIERNES:'Telecomunicaciones'},
              {HORA: '9:00 - 10:00', LUNES:'Telecomunicaciones', MARTES:'Ing Software', MIERCOLES:'DevOps', JUEVES:'Ing Software', VIERNES:'Telecomunicaciones'},
              {HORA: '10:00 - 11:00', LUNES:'Programacion II', MARTES:'Ing Software', MIERCOLES:'Telecomunicaciones', JUEVES:'Etica', VIERNES:'Programacion II'},
              {HORA: '11:00 - 12:00', LUNES:'Programacion II', MARTES:'Programacion II', MIERCOLES:'Ing Software', JUEVES:'Front-End II', VIERNES:'Programacion II'},
              {HORA: '12:00 - 13:00', LUNES:'Etica', MARTES:'Front-End II', MIERCOLES:'Etica', JUEVES:'Front-End II', VIERNES:'Etica'},
              {HORA: '13:00 - 14:00', LUNES:'Front-End II', MARTES:'', MIERCOLES:'Back-End', JUEVES:'Back-End', VIERNES:''},
              {HORA: '14:00 - 15:00', LUNES:'Front-End II', MARTES:'Back-End', MIERCOLES:'Back-End', JUEVES:'', VIERNES:'Back-End'},
            ]
          }
        }
    }
    </script>