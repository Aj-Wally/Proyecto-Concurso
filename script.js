     // Mostrar u ocultar el botón de volver arriba
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
      scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Validación personalizada de formulario (si se usa)
    (function () {
      'use strict';
      var forms = document.querySelectorAll('.needs-validation');
      Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    })();

    // Animación de cards en galería
    document.addEventListener("DOMContentLoaded", function () {
      const cards = document.querySelectorAll(".fade-in");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 300);
      });
    });