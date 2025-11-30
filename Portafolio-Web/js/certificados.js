  const modal = document.getElementById('modal-certificado');
  const cerrar = modal.querySelector('.cerrar');
  const modalImg = document.getElementById('modal-img');

  // Selecciona todos los enlaces que abren modal
  document.querySelectorAll('.open-modal').forEach(enlace => {
    enlace.addEventListener('click', e => {
      e.preventDefault();
      const card = enlace.closest('.card');

      // Solo cargar la imagen desde data-img
      modalImg.src = card.dataset.img;

      // Mostrar modal
      modal.style.display = 'flex';
    });
  });

  // Cerrar modal
  cerrar.addEventListener('click', e => {
    e.preventDefault();
    modal.style.display = 'none';
  });

  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });