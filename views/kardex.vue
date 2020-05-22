<template>
<b-container align="left" fluid class="ml-5">
    <div class="mb-4 mt-3" >
      <b-avatar class="mr-7" variant="primary" text="DB" size="6rem"></b-avatar>
    </div>
    
  <!--<b-row>
    <b-col>Daniel Belmonte Diaz</b-col>
  </b-row>
  <b-row>
    <b-col>16640099</b-col>
  </b-row>
  <b-row>
    <b-col>Ing Tecnologias de la Informacion y Comunicaciones</b-col>
  </b-row>
  -->
 <b-table v-for="(item, index) in resultAlumno" :key="index" striped hover :items="item" ></b-table>
     <div class="mt-5">
  <b-table v-for="(item, index) in resultKardex" :key="index" striped hover :items="item" ></b-table>
     </div>
</b-container>  
 
</template>

<script>
import axios from "axios";
export default {
    data:() => ({
        resultAlumno:[],
        resultKardex:[]
      
    }),
    created(){
    
     this.consultaAlumno(this.getIdAlumno())
     this.consultaKardex(this.getIdAlumno())
    },
    methods:{
    async consultaAlumno(idAlumno) {
      try{
    this.resultAlumno = await axios.get(`http://localhost:8585/tec/alumnos/info/${idAlumno}`)
    console.log(this.resultAlumno.data)
    console.log(this.resultAlumno.status)
  } catch(error) {
    console.log(error)
  }
    },

    async consultaKardex(idAlumno) {
      try{
    this.resultKardex = await axios.get(`http://localhost:8585/tec/kardex/materias/${idAlumno}`)
    console.log(this.resultKardex.data)
    console.log(this.resultKardex.status)
  } catch(error) {
    console.log(error)
  }
    },
    getIdAlumno(){
      const dataUser=JSON.parse(localStorage.dataUser);
        const idAlumnoF = dataUser.idAlumno;
        
      return idAlumnoF;
    }
    }
}
</script>