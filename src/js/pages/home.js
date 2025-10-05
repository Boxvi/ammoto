import { getMotos } from "../modules/firebase.js";

export async function initPage() {
  const contenedor = document.querySelector('#lista-elementos');
  contenedor.innerHTML = `<p class="text-gray-500">Cargando...</p>`;

  try {
    const elementos = await getMotos();
    if (elementos.length === 0) {
      contenedor.innerHTML = `<p class="text-gray-400 text-center">No hay elementos aún</p>`;
      return;
    }

    console.log(elementos);

    contenedor.innerHTML = elementos.map(el => 
 
      `
      <div class="flex items-center gap-4 bg-white dark:bg-background-dark/50 p-4 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-background-dark/80 transition-colors cursor-pointer">
          <div class="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
              <span class="material-symbols-outlined text-blue-600 text-2xl">qr_code_2</span>
          </div>
          <div class="flex-grow">
              <p class="font-semibold text-gray-800 dark:text-gray-100">${el.nombre}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">Código: ${el.color}</p>
          </div>
          <span class="material-symbols-outlined text-gray-400 dark:text-gray-500">chevron_right</span>
      </div>
    `).join('');
  } catch (error) {
    contenedor.innerHTML = `<p class="text-red-500">Error cargando datos: ${error.message}</p>`;
  }
}
