<template>

    <div>
        <br>
        <h1><strong> DOCENTES </strong></h1>
        <div>
            <br>
            <div>
                 <b-button-group>
 <h2>Departamento</h2> <b-dropdown id="dropdown-1" text="Seleccionar Departamento" class="m-md-2" variant="outline-primary">
    <b-dropdown-item  @click="consultaDocentes('1')">Ciencias Básicas</b-dropdown-item>
    <b-dropdown-item  @click="consultaDocentes('5')">Ingeniería Industrial</b-dropdown-item>
    <b-dropdown-item  @click="consultaDocentes('3')">Química y Bioquímica</b-dropdown-item>
    <b-dropdown-item  @click="consultaDocentes('4')">Sitemas y Computación</b-dropdown-item>
    <b-dropdown-item  @click="consultaDocentes('2')">Electrónica y Mecatrónica</b-dropdown-item>
    <b-dropdown-item  @click="consultaDocentes('6')">Ciencias Economico Administrativo</b-dropdown-item>
    <b-dropdown-item  @click="consultaDocentes('7')">Departamento de Desarrollo Academico</b-dropdown-item>
    <b-dropdown-item  @click="consultaDocentes('8')"> Departamento de División de Estudios Profesionales</b-dropdown-item>
   
  </b-dropdown>
   </b-button-group>
            </div>
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
   
    
    },
    methods:{
    async consultaDocentes(dep) {
      try{
    this.result = await axios.get(`http://localhost:8585/tec/docente/departamento/${dep}`)
    console.log(this.result.data)
    console.log(this.result.status)
    


  } catch(error) {
    console.log(error)
  }
    },
    listen(event){
     console.log(event)
    
    }
    }
}
</script>