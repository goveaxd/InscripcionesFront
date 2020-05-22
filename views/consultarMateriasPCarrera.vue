<template>
    <div>
        <br>
        <h1><strong> MATERIAS </strong></h1>
        <div>
            <br>
            <div>
                
<b-dropdown id="dropdown-1" text="Seleccionar Carrera" class="m-md-2" variant="outline-primary">
   <b-dropdown-item @click="consultaMaterias('7')">Ingeniería Industrial</b-dropdown-item>
    <b-dropdown-item @click="consultaMaterias('6')">Ingeniería Bioquímica</b-dropdown-item>
    <b-dropdown-item @click="consultaMaterias('5')">Ingeniería Mecatrónica</b-dropdown-item>
    <b-dropdown-item @click="consultaMaterias('4')">Ingeniería en Administración</b-dropdown-item>
    <b-dropdown-item @click="consultaMaterias('3')">Ingeniería en Gestión Empresarial</b-dropdown-item>
    <b-dropdown-item @click="consultaMaterias('2')">Ingeniería en Sistemas Computacionales</b-dropdown-item>
    <b-dropdown-item @click="consultaMaterias('1')">Ingeniería en Tecnologias de la Información y Comunicaciones</b-dropdown-item>
    
    
  </b-dropdown>
 
            </div>
</div>

<br>
<div>
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
 
    
    },
    methods:{
    async consultaMaterias(carrera) {
      try{
    this.result = await axios.get(`http://localhost:8585/tec/materias/carrera/${carrera}`)
    console.log(this.result.data)
    console.log(this.result.status)
    


  } catch(error) {
    console.log(error)
  }
    }
    }
    
}
</script>