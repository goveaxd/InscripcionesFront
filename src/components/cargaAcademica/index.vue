<template>
    <main class="flexbox">
        <center>
        <br>
        <h1><strong> Carga Academica</strong></h1>
        <label>{{nombre}}</label>
       <Board id="board-1" > 
           <Card :id="mat.codigo_materia" draggable="true" v-for="mat in materiasDisp" :key="mat.id">
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
 <img src='../../sources/save_icon.png' class = "flotante"/>
       
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
         materiasDisp:[ ],
       
        nombre: "Jorge Samuel Manrriquez Elias"
      }
    },
    components:{
        Board,Card,carga
    },
    created(){
     // invocar los métodos
     this.consultaMateriasCarga();
    },
     methods:{
    async consultaMateriasCarga() {
        try{
            let result = await axios.get("http://192.168.1.100:8585/tec/cargaAcademica/hfjks/H/1")
           this.materiasDisp=result.data;
        


        } catch(error) {
            console.log(error)
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