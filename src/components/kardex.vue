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
import axios from "axios";
export default {
    data:() => ({
        result:[],
      
    }),
    created(){
     // invocar los métodos
     this.consultaDocentes();
    },
    methods:{
    async consultaDocentes() {
      try{
    this.result = await axios.get("http://localhost:8181/tec/docente")
    console.log(this.result.data)
    console.log(this.result.status)
    


  } catch(error) {
    console.log(error)
  }
    }
    }
}
</script>