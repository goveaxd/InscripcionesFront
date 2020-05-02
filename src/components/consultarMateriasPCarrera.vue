<template>
    <div>
        <br>
        <h1><strong> MATERIAS </strong></h1>
        <div>
            <br>
            <div>
                
<b-dropdown id="dropdown-1" text="Seleccionar Carrera" class="m-md-2" variant="outline-primary">
   <b-dropdown-item>Ingeniería Industrial</b-dropdown-item>
    <b-dropdown-item>Ingeniería Bioquímica</b-dropdown-item>
    <b-dropdown-item>Ingeniería Mecatrónica</b-dropdown-item>
    <b-dropdown-item>Ingeniería en Administración</b-dropdown-item>
    <b-dropdown-item>Ingeniería en Gestión Empresarial</b-dropdown-item>
    <b-dropdown-item>Ingeniería en Sistemas Computacionales</b-dropdown-item>
    <b-dropdown-item>Ingeniería en Tecnologias de la Información y Comunicaciones</b-dropdown-item>
    
    
  </b-dropdown>
 
            </div>
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
        items: [
          
          {Semestre: '', Primero:'Taller de Ética', Segundo:'Programación Orientada a Objetos', Tercero:'Estructura y Organización de Datos',
           Cuarto:'Programación II', Quinto:'Telecomunicaciones', Sexto:'Programación Web', Septimo:'Redes Emergentes', Octavo:' Administración y Seguridad de Redes'},
         {Semestre: '', Primero:'Cálculo Diferencial', Segundo:'Cálculo Integral', Tercero:'Fundamentos de Bases de Datos',
          Cuarto:'Taller de Bases de Datos', Quinto:'Base de Datos Distribuidas', Sexto:'Tecnologías Inalámbricas', Septimo:'Sistemas Operativos II', Octavo:'Ingenieria del Conocimiento'},
         {Semestre: '', Primero:'Fundamentos de Programación', Segundo:'Contabilidad y Costos', Tercero:'Electricidad y Magnetismo', 
          Cuarto:'Ingeniería de Software', Quinto:'Fundamentos de Redes', Sexto:'Sistemas Operativos I', Septimo:'Negocios Electrónicos I', Octavo:'Interacción Humano Computadora'},
        ]
      }
    }
}
</script>