<template>
    <div>
        <br>
        <h1>Búsqueda de Alumno</h1>
        <div class="mb-4 mt-3" >
    <b-avatar class="mr-7" variant="primary" text="ITLP" size="6rem"></b-avatar>
    </div>
        <label>Número de Control   </label> 
    <input type="text" placeholder="16640099"> <br><br>
    
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Nombre Completo</th>
      <th scope="col">NoControl</th>
      <th scope="col">Semestre</th>
      <th scope="col">Carrera</th>
      <th scope="col">Carga</th>
      <th scope="col">Kárdex</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Daniel Belmonte Diaz</th>
      <td>16640099</td>
      <td>8vo</td>
      <td>Ing Tecnologías de la Información y Comunicaciones</td>
      <td><button type="button" class="btn btn-outline-info">Ver Carga</button></td>
      <td><button type="button" class="btn btn-outline-info">Ver Kárdex</button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>