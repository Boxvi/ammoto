import { loadComponent } from './utils.js';
import { initRouter } from './router.js';



document.addEventListener('DOMContentLoaded', async () => {
  await loadComponent('#header', './src/html/partials/header.html');
  await loadComponent('#footer', './src/html/partials/footer.html');

  // Inicializar el router

  initRouter();



});



async function cargarMotos() {
  const motos = await getMotos();
  renderMotos(contenedor, motos);
}