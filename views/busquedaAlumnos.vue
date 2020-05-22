<template>
    <div>
        <br>
        <h1>Búsqueda de Alumno</h1>
        <div class="mb-4 mt-3" >
    <b-avatar class="mr-7" variant="primary" text="ITLP" size="6rem"></b-avatar>
    </div>
        <label>Número de Control   </label> 
    <input type="text" name="test" placeholder="Ingresa nuemero de control"> <button type="button" class="btn btn-outline-info" @click="getNocontrol()">Buscar Alumno</button> <br><br>

    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre Completo</th>
      <th scope="col">NoControl</th>
      <th scope="col">Semestre</th>
      <th scope="col">Carrera</th>
  
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <th scope="row">{{resultAlumno.data.nombre}}   {{resultAlumno.data.apellidos}}</th>
      <td>{{resultAlumno.data.noControl}}</td>
      <td>8vo</td>
      <td>Ing Tecnologías de la Información y Comunicaciones</td>
     
    </tr>
  </tbody>
</table>
    </div>
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
    
    },
    methods:{
    
    async consultaAlumno(nocontrol) {
      try{
    this.resultAlumno = await axios.get(`http://localhost:8585/tec/alumnos/info/Npcrtl/${nocontrol}`)
    console.log(this.resultAlumno.data)
    console.log(this.resultAlumno.status)
  } catch(error) {
    console.log(error)
  }
    },
    getNocontrol(){
const field = document.querySelector("input[name=test]").value
        console.log(field)
        this.consultaAlumno(field)
    },
    getIdAlumno(){
      const dataUser=JSON.parse(localStorage.dataUser);
        const idAlumnoF = dataUser.noControl;
        
      return idAlumnoF;
    }
    }
}
</script>