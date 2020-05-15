<template>
    
          
    <div>
            <br>
            <b-container align="center" fluid class="ml-5">
                <div class="mb-4 mt-3" >
                  <b-avatar class="mr-7" variant="primary" text="DB" size="6rem"></b-avatar>
                 
                </div>
                  Nombre: {{resultAlumno.data[0].nombre}}
                   {{resultAlumno.data[0].apellidos}}
                   <br>
                    Número de Control: {{resultAlumno.data[0].noControl}}
                    <br>
               
            <!--  <b-table v-for="(item, index) in resultAlumno" :key="index" striped hover :items="item" ></b-table>-->
              <br>

              <h1><strong> HORARIO ! </strong></h1>
             
                
              <!--<li v-for="(materiaHorario, index) in  resultHorarioeMateria.data" :key="index">-->
                          
                 <div  class="mt-5">

              <h1><strong> HORARIO </strong></h1>
                 <div class="mt-5">
             <b-table v-for="(item, index) in resultHorarioeMateria" :key="index" striped hover :items="item" ></b-table>

                 </div>
              
               <div class="mt-5" >
                 <thead class="thead-dark">
            <b-table v-for="(item, index) in resultDocenteMateria" :key="index" striped hover :items="item" ></b-table>
                 </thead>
                 </div>
            </b-container> 
            
            

</div>
        
</template>
<script>
import axios from "axios";
    export default {
      data:() => ({
        resultAlumno:[],
        resultDocenteMateria:[],
        resultHorarioeMateria:[]
      
    }),
    created(){
     // invocar los métodos
     this.consultaAlumno(),
     this.consultaDocenteMateria(),
     this.consultaHorarioMateria()
    
    },
         methods:{
            async consultaHorarioMateria() {
      try{
    this.resultHorarioeMateria = await axios.get("http://localhost:8585/tec/materias/horarios/1")
    console.log(this.resultHorarioeMateria.data)
    console.log(this.resultHorarioeMateria.status)
  } catch(error) {
    console.log(error)
  }
    },
           async consultaDocenteMateria() {
      try{
    this.resultDocenteMateria = await axios.get("http://localhost:8585/tec/imparte/materia/1")
    console.log(this.resultDocenteMateria.data)
    console.log(this.resultDocenteMateria.status)
  } catch(error) {
    console.log(error)
  }
    },
    async consultaAlumno() {
      try{
    this.resultAlumno = await axios.get("http://localhost:8585/tec/alumnos/info/1")
    console.log(this.resultAlumno.data)
    console.log(this.resultAlumno.status)
  } catch(error) {
    console.log(error)
  }
    }
    }
    }
    </script>