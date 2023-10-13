/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
document.addEventListener('DOMContentLoaded', event => {
  // Selecciona todas las imágenes
  const images = document.querySelectorAll('.my-gallery-block img');

  // Crea el modal
  const modal = document.createElement('div');
  modal.style.display = 'none';
  modal.style.position = 'fixed';
  modal.style.zIndex = '1';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100%';
  modal.style.height = '100%';
  modal.style.overflow = 'auto';
  modal.style.backgroundColor = 'rgba(0,0,0,0.4)';

  // Crea el contenido del modal
  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = '#fefefe';
  modalContent.style.margin = '15% auto';
  modalContent.style.padding = '20px';
  modalContent.style.border = '1px solid #888';
  modalContent.style.width = '80%';
  modalContent.style.textAlign = "center";

  // Añade el contenido al modal
  modal.appendChild(modalContent);

  // Añade el modal al cuerpo del documento
  document.body.appendChild(modal);

  // Añade un controlador de eventos de clic a cada imagen
  images.forEach(img => {
    img.addEventListener('click', () => {
      // Limpia el contenido del modal
      modalContent.innerHTML = '';

      // Añade todas las imágenes al contenido del modal
      images.forEach(image => {
        const imageInModal = document.createElement('img');
        imageInModal.src = image.src;
        imageInModal.alt = image.alt;
        imageInModal.style.width = '30%';
        imageInModal.style.padding = ".2rem";
        modalContent.appendChild(imageInModal);
      });

      // Muestra el modal
      modal.style.display = 'block';
    });
  });

  // Cierra el modal cuando se hace clic fuera de la imagen
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});
/******/ })()
;
//# sourceMappingURL=view.js.map