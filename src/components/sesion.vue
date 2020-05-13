<template>
<div>
    <br>
    <h1>Bienvenido al Sitio Oficial del ITLP</h1>
    <div class="mb-4 mt-3" >
    <b-avatar class="mr-7" variant="primary" text="ITLP" size="6rem"></b-avatar>
    </div>
    <form class="needs-validation" novalidate> <center>
        
  <div class="form-group">
    <label for="validationCustom01">Número de Control</label> <br>
    <input type="text"  id="validationCustom01" placeholder="NoControl">
    </div>
  <div class="form-group">
    <label>Contraseña</label><br>
    <input type="password" id="exampleInputPassword1" placeholder="Contraseña">
  </div>
  
  <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
  </center>
</form>
</div>
</template>

<script>
// Example starter JavaScript for disabling form submissions if there are invalid 
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>