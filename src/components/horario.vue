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
              
               <div class="mt-5" >
                 <thead class="thead-dark">
              <b-table striped hover :items="item"></b-table>
                 </thead>
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
            ],
            item:[
              {Creditos:'2-3-5', Clave:'DER85', Materia:'Base de Datos', Docente:'Ma. Estela Romero Fuentes'},
              {Creditos:'1-4-5', Clave:'RC5D5', Materia:'DevOps', Docente:'Heriberto Flores Chavez'},
              {Creditos:'2-2-4', Clave:'RFE85', Materia:'Ing Software', Docente:'Ma. Estela Romero Fuentes'},
              {Creditos:'3-2-5', Clave:'FR52D', Materia:'Programación II', Docente:'Margarita Torres Figueroa'},
              {Creditos:'3-2-5', Clave:'DD252', Materia:'Back-End', Docente:'Heriberto Flores Chavez'},
              {Creditos:'2-3-5', Clave:'FFF25', Materia:'Front-End II', Docente:'Rosa Isela Ponce del Campo'},
              {Creditos:'2-2-4', Clave:'CVD55', Materia:'Telecomunicaciones', Docente:'Maria Teresa Pichardo'},
              {Creditos:'1-3-4', Clave:'AZX44', Materia:'Ética', Docente:'Laura Elena Chulim'}
            
            ]
          }
        }
    }
    </script>