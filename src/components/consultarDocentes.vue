<template>

    <div>
        <br>
        <h1><strong> DOCENTES </strong></h1>
        <div>
            <br>
            <div>
                 <b-button-group>
 <h2>Departamento</h2> <b-dropdown id="dropdown-1" text="Seleccionar Departamento" class="m-md-2" variant="outline-primary">
    <b-dropdown-item>Ciencias Básicas</b-dropdown-item>
    <b-dropdown-item>Ingeniería Industrial</b-dropdown-item>
    <b-dropdown-item>Química y Bioquímica</b-dropdown-item>
    <b-dropdown-item>Sitemas y Computación</b-dropdown-item>
     <b-dropdown-item>Electrónica y Mecatrónica</b-dropdown-item>
    <b-dropdown-item>Ciencias Economico Administrativo</b-dropdown-item>
    <b-dropdown-item>Departamento de Desarrollo Academico</b-dropdown-item>
    <b-dropdown-item>Departamento de División de Estudios Profesionales</b-dropdown-item>
   
  </b-dropdown>
   </b-button-group>
            </div>
</div>

<br>

<div >
  
 
    <b-table busy.sync="true" striped hover :items="result" :fields="items"></b-table>
  </div>
    </div>    
</template>

<script>
import axios from "axios";
export default {
    data:() => ({
        result:[],
        items: [
          {key: 'iddocente', sortable: true },
          {key: 'nombre', sortable: true },
          {key: 'apellido', sortable: true },
          {key: 'RFC', sortable: true },
          {key: 'mail', sortable: true }
        ]
      
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
    console.log(Object.values(this.result.data))   


  } catch(error) {
    console.log(error)
  }
    }
    }
}
</script>