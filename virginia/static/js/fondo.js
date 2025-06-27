const images = [
  "../../static/images/nina.webp",
    "../../static/images/fondo.webp",
    "../../static/images/fondo_comida.webp",
    "../../static/images/ejemplo_retrato.webp",
    "../../static/images/fondo_rustico.webp",
    "../../static/images/pareja.webp",
    "../../static/images/comida.webp",
];

let currentIndex = 0;
let bgLayers = [];

// Crear las capas una sola vez
function initFadeSlideshow() {
  const container = document.getElementById('bg');

  images.forEach((image, index) => {
      const layer = document.createElement('div');
      layer.style.cssText = `
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          transform: scale(1.125);
          background:
              linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.7) 100%),
              url("${image}") center/cover no-repeat;
          opacity: ${index === 0 ? 1 : 0};
          transition: opacity 1.5s ease-in-out;
          z-index: ${images.length - index};
      `;
      container.appendChild(layer);
      bgLayers.push(layer);
  });
}

function fadeToNext() {
    bgLayers[currentIndex].style.opacity = '0';
    currentIndex = (currentIndex + 1) % images.length;
    bgLayers[currentIndex].style.opacity = '1';
}

// Inicializar y comenzar
initFadeSlideshow();
setInterval(fadeToNext, 3000); // Cambiar cada 4 segundos
