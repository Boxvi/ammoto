export function renderMotos(container, motos) {
  container.innerHTML = "";

  motos.forEach(moto => {
    const card = document.createElement("div");
    card.className = "flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm";
    card.innerHTML = `
      <div class="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-lg">
        <span class="material-symbols-outlined text-blue-600 text-2xl">qr_code_2</span>
      </div>
      <div class="flex-grow">
        <p class="font-semibold">${moto.nombre}</p>
        <p class="text-sm text-gray-500">Código: ${moto.codigo}</p>
      </div>
    `;
    container.appendChild(card);
  });
}
