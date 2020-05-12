<template>

    <div>
        <br>
        <h1><strong> Intituto Tecnologico de La Piedad </strong></h1>
        <div>
            <br>
            <div>
                 <b-button-group>
 <h2>Carreras</h2> <b-dropdown id="dropdown-1" text="Seleccionar Carrera" class="m-md-2" variant="outline-primary">
    <b-dropdown-item>Ingeniería Tecnonolgias de la informacion y comunicaciones</b-dropdown-item>
    <b-dropdown-item>Ingeniería Industrial</b-dropdown-item>
    <b-dropdown-item>Ingenieria Bioquímica</b-dropdown-item>
    <b-dropdown-item>Ingeniería en Sistemas Computacionales</b-dropdown-item>
     <b-dropdown-item>Ingeniería Mecatrónica</b-dropdown-item>
    <b-dropdown-item>Ingeniería Administracion</b-dropdown-item>
    <b-dropdown-item>Ingeniería Gestion Empresarial</b-dropdown-item>
    
   
  </b-dropdown>
  
   </b-button-group>
   
            </div>
            <br><br><br>
                <div class = "mt-3"> 
    <b-button-group > 
      <b-button  variant = "info" >1° Semestre </b-button> 
      <b-button  variant = "info" > 2° Semestre </b-button> 
      <b-button  variant = "info" > 3° Semestre </b-button> 
    </b-button-group > 
    <br><br>
    <b-button-group > 
        <b-button  variant = "info" > 4° Semestre </b-button>
        <b-button  variant = "info" > 5° Semestre </b-button>
        <b-button  variant = "info" > 6° Semestre </b-button>
      </b-button-group > 
      <br><br>
      <b-button-group > 
        <b-button  variant = "info" > 7° Semestre </b-button>
        <b-button  variant = "info" > 8° Semestre </b-button>
      </b-button-group > 
  </div > 
            
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