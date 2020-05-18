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
     // invocar los métodos
     this.consultaAlumno()
     this.consultaKardex()
    },
    methods:{
    async consultaAlumno() {
      try{
    this.resultAlumno = await axios.get("http://localhost:8585/tec/alumnos/info/1")
    console.log(this.resultAlumno.data)
    console.log(this.resultAlumno.status)
  } catch(error) {
    console.log(error)
  }
    },

    async consultaKardex(idAlumno) {
      try{
    this.resultKardex = await axios.get("http://localhost:8585/tec/kardex/materias/1")
    console.log(this.resultKardex.data)
    console.log(this.resultKardex.status)
  } catch(error) {
    console.log(error)
  }
    }
    }
}
</script>