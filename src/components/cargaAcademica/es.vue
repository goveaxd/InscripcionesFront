<template>
    <div>
        <br>
        <h1><strong> DOCENTES </strong></h1>
        <label>{{nombre}}</label>
        <div>
            <br>
</div>

<div v-if="materiasDisp.length">
    <button  class="btn btn-mat" v-for="mat in materiasDisp" :key="mat.id">
        {{mat.Creditos}}  |  {{mat.Clave}}  |  {{mat.Nombre}}
    </button>
</div>
<br>
<div>
    <b-table striped hover :items="items"></b-table>
  </div>
    </div>    
</template>

<script>
export default {
    data() {
      return {
        materiasDisp:[
          {id:1, Creditos:"12-11-23", Clave: "ERERT3534" , Nombre: 'Geografia'},
          {id:2, Creditos:"23-11-56" , Clave: "DGE345" , Nombre: 'Psicología'},
          {id:3,  Creditos:"11-23-76",Clave: "ERG345" , Nombre: 'Educacion fisica'},
        ],
        items: [
          { Creditos:"12-23-12",Clave: "ASAS1212" , "Nombre Materia": 'Matematicas' },
          { Creditos:"12-60-12",Clave: "DCFS345" , "Nombre Materia": 'Historia' },
        ],
        nombre: "Jorge Samuel Manrriquez Elias"
      }
    }
}
</script>

<style>
.btn-mat{
    margin: 5px;
    background-color: #F3F4F6;
    border-color: #1D2F62;
}
</style>