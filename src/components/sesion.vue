<template>
<div>
    <br>
    <h1>Bienvenido al Sitio Oficial del ITLP</h1>
    <div class="mb-4 mt-3" >
    <b-avatar class="mr-7" variant="primary" text="ITLP" size="6rem"></b-avatar>
    </div>
    <div class="needs-validation" novalidate> <center>
        
  <div class="form-group">
    <label for="validationCustom01" >Número de Control</label> <br>
    <input type="number" v-model="noControl" id="validationCustom01" placeholder="NoControl">
    </div>
  <div class="form-group">
    <label>Contraseña</label><br>
    <input type="password" v-model="password" id="exampleInputPassword1" placeholder="Contraseña">
  </div>
  <button type="submit" class="btn btn-primary" @click="botonEnviar">Iniciar Sesión</button>
  </center>
</div>

</div>
</template>

<script>
import axios from "axios";


  export default {
    data(){
      return{
        noControl:"",
        password:""
      }
    },
    methods:{
      botonEnviar(){
        if(this.noControl.length>0 && this.password.length>0){
          this.IniciarSesion();
        }else{alert("Llene todos los campos por favor")}
      },
      async IniciarSesion() {
        try{
          this.result = await axios.get(`http://localhost:8585/tec/sesion/${this.noControl}/${this.password}`)

          if(this.result.data>0){
            const dataUser={"noControl":this.noControl,"password":this.password,"idAlumno":this.result.data};
            localStorage.setItem("dataUser",JSON.stringify(dataUser));
            location.reload();

          }else{
            
            alert("Numero de control incorrecto");
            
          }
        } catch(error) {
          alert(error)
            console.log(error)
        }
      }
      
    }
  }
</script>