const enlaces = document.querySelectorAll('.tabs a');
const secciones = document.querySelectorAll('main > section');

// Mostrar la primera sección activa por defecto
const activo = document.querySelector('.tabs a.active');
if (activo) {
  const target = activo.dataset.target;
  const section = document.querySelector('.' + target);
  if (section) {
    section.classList.add('seccion-activa');
  }
}

enlaces.forEach(enlace => {
  enlace.addEventListener('click', e => {
    e.preventDefault();

    // Quitar clase activa de todos los enlaces
    enlaces.forEach(el => el.classList.remove('active'));
    enlace.classList.add('active');

    // Ocultar todas las secciones
    secciones.forEach(sec => sec.classList.remove('seccion-activa'));

    // Mostrar la sección correspondiente
    const target = enlace.dataset.target;
    const section = document.querySelector('.' + target);
    if (section) {
      section.classList.add('seccion-activa');
    }
  });
});
