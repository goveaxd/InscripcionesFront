<template>

    <div>
        <br>
        <h1><strong> ¡Proceso Terminado! </strong></h1>
        <div>
            <br>
        
 <h2>Tu inscripcion ha sido terminada con exito</h2> 
  
   
            <br><br><br>
            <b-button variant="primary">Imprimir Horario</b-button>
            
</div>

<br>

<div >
    <b-table v-for="(item, index) in result" :key="index" striped hover :items="item" ></b-table>
  </div>
    </div>    
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