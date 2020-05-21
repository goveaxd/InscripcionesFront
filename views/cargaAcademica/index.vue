<template>
    <main class="flexbox">
        <center>
        <br>
        <h1><strong> Carga Academica</strong></h1>
        <label>{{alumno.nombre}} {{alumno.apellidos}}</label>
       <Board id="board-1" > 
           <Card :id="mat.idmaterias" draggable="true" v-for="mat in materiasDisp" :key="mat.idmaterias">
                <table  class="table tab">
                    <tr>
                        <td> {{mat.creditos}}</td><td>{{mat.codigo_materia}}</td><td>{{mat.nombre_materia}}</td>
                    </tr>
                </table>
           </Card>
       </Board>

        <table id="tabla" class="table">
            <tr>
                <td id="column">Creditos</td><td>Clave</td><td>Nombre</td>
            </tr>
            <tr>
                <td colspan="3" >
                    <Board id="board-2" class="columna">
                        <p class="arrastre">Arrastre los elementos aquí para agregarlos</p> 
                    </Board>
                </td>
            </tr>
        </table>
        </center>

       <button @click="insertarCarga()">Insertar Carga</button>
       </main>
</template>

<script>
import Board from './board';
import Card from './card';
import carga from './es';
import axios from "axios";

export default {
     data() {
      return {
         materiasDisp:[],
         seleccionado:[],
         alumno:{}
      }
    },
    components:{
        Board,Card,carga
    },
    created(){
     // invocar los métodos
     localStorage.removeItem("matAgreg");
      this.consultarDatosAlumno();
     this.consultaMateriasCarga();
    },
     methods:{
    async consultaMateriasCarga() {
        try{
            let result = await axios.get("http://localhost:8585/tec/cargaAcademica/hfjks/H/1")
           this.materiasDisp=result.data;
        } catch(error) {
            console.log(error)
        }
    },
    async consultarDatosAlumno() {
        try{
            let result1 = await axios.get(`http://localhost:8585/tec/alumno/${JSON.parse(localStorage.dataUser).idAlumno}`)
           this.alumno=result1.data;
        } catch(error) {
            alert(error)
        }
    },
     insertarCarga(){
        let  matAgreg={}
         try{
            matAgreg=JSON.parse(localStorage.matAgreg)
        }catch{}
        
        if(matAgreg.length>0){
            for(let i=0;i<matAgreg.length;i++){
                let idAlumno=this.alumno.idAlumno
    
                axios({
                    method: 'post',
                    url: 'http://localhost:8585/tec/cargaAcademica',
                    data: {
                        semestre_idsemestre:1,
                        materias_idmaterias: matAgreg[i],
                        alumnos_idAlumno: idAlumno
                    },
                    validateStatus: (status) => {
                        return true; // I'm always returning true, you may want to do it depending on the status received
                    },
                    }).catch(error => {

                    }).then(response => {

                        alert("Carga Academica Agregada")
                        localStorage.removeItem("matAgreg")
                        
                    });
            }
        }
    }


    }
    
}
</script>

<style>

.flexbox{
    width: 100%;
    overflow: hidden;
    margin: 0 auto;
    padding: 15px;
}

.flexbox .board{
    text-align: center;
    background-color: rgb(250,250,250);
    width: 100%;
    padding: 15px;
}

.flexbox .board .card{
    padding: 15px 25px;
    background-color: #F3F3F3;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    margin: 10px;
    margin-bottom: 15px;
}

#tabla tr td .board .card{
    width: 100%;
    text-align: center;
    display: block;
}
.columna{
    flex-direction: column;
    width: 100%;
    text-align: center;
}
.tab{
font-size: 12px;
max-width: 400px;
}

.tab tr td{
    width: 30%;
}
.arrastre{
    color: rgb(114, 104, 104);
}

.flotante {
    float: right ;
    height: 40px;
}
</style>