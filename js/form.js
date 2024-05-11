document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
  
    // Simulación de envío del formulario (puedes reemplazar esto con tu lógica de envío real)
    setTimeout(function() {
      // Mostrar el mensaje de éxito con SweetAlert
      Swal.fire({
        icon: 'success',
        title: '¡Enviado!',
        text: 'Su mensaje ha sido enviado. Pronto nos pondremos en contacto con usted.',
        confirmButtonText: 'Cerrar'
      }).then((result) => {
        // Redirigir al usuario al inicio de la página
        window.location.href = 'index.html';
      });
  
      // Limpiar el formulario (opcional)
      document.getElementById("contactForm").reset();
    }, 1000); // Tiempo de espera simulado de 1 segundo
  });
  