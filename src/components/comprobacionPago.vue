<template>

    <div>
        <br>
        <h1><strong> Recibo de Pago </strong></h1>
       
        <div>
            <br><br>
            <h3>Ticket</h3>
           <b-form-file  accept = "image / *"> </b-form-file>
           <br><br><br>
             
            <h3>Numero de transaccion</h3>
            <b-form-file  accept = "image / *"> </b-form-file>
            <br><br><br>
            <b-button variant="primary">Enviar Recibo</b-button>
              
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