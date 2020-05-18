<template>
    <div class="content">
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in result" :key="index">
      <th scope="row"></th>
      <td>{{item.id}}</td>
      <td></td>
      <td></td>
    </tr>   
  </tbody>
</table>
    
    <b-button @click="consultaDocentes()">CONSULTA
        
    </b-button>
  </div>
</template>

<script>
  import axios from "axios";
export default {
    data:() => ({
        result:{}
        
      
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