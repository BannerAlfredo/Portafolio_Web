// Seleccionamos el enlace del tab CV y la sección correspondiente
const enlaceCV = document.querySelector('.tabs a[data-target="cv"]');
const seccionCV = document.querySelector('.cv');

// Botón de descarga dentro del overlay
const btnDescargarCV = document.querySelector('.cv .btn-descargar');

// Evento para mostrar la sección CV
if (enlaceCV && seccionCV) {
  enlaceCV.addEventListener('click', e => {
    e.preventDefault();

    // Quitar clase activa de todos los tabs
    document.querySelectorAll('.tabs a').forEach(el => el.classList.remove('active'));
    enlaceCV.classList.add('active');

    // Ocultar todas las secciones
    document.querySelectorAll('main > section').forEach(sec => sec.classList.remove('seccion-activa'));

    // Mostrar solo la sección CV
    seccionCV.classList.add('seccion-activa');
  });
}

// Evento para descargar el CV
if (btnDescargarCV) {
  btnDescargarCV.addEventListener('click', e => {
    // Aquí se fuerza la descarga del archivo
    const link = document.createElement('a');
    link.href = 'img/CV/CV_BannerRodriguez.pdf'; // ruta de tu CV en PDF
    link.download = 'CV_BannerRodriguez.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
}
