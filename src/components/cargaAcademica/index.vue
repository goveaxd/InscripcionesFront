<template>
    <main class="flexbox">
        <center>
        <br>
        <h1><strong> DOCENTES </strong></h1>
        <label>{{nombre}}</label>
       <Board id="board-1" > 
           <Card :id="mat.id" draggable="true" v-for="mat in materiasDisp" :key="mat.id">
                <table  class="table tab">
                    <tr>
                        <td> {{mat.Creditos}}</td><td>{{mat.Clave}}</td><td>{{mat.Nombre}}</td>
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

export default {
     data() {
      return {
        materiasDisp:[
          {id:1, Creditos:"12-11-23", Clave: "ERERT3534" , Nombre: 'Geografia'},
          {id:2, Creditos:"23-11-56" , Clave: "DGE345" , Nombre: 'Psicología'},
          {id:3,  Creditos:"11-23-76",Clave: "ERG345" , Nombre: 'Educacion fisica'},
          {id:4,  Creditos:"11-23-76",Clave: "ERG345" , Nombre: 'Educacion fisica'},
          {id:5,  Creditos:"11-23-76",Clave: "ERG345" , Nombre: 'Educacion fisica'},
        ],
       
        nombre: "Jorge Samuel Manrriquez Elias"
      }
    },
    components:{
        Board,Card,carga
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