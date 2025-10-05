import { getMotos, addMoto } from "../api/apiMoto.js";

import { renderMotos } from "../ui/renderMotos.js";




const contenedor = document.querySelector("#lista-motos");
const btnAgregar = document.querySelector("#btnAgregar");

async function cargarMotos() {
    const motos = await getMotos();
    renderMotos(contenedor, motos);
}

btnAgregar.addEventListener("click", async () => {
    const nombre = prompt("Nombre de la moto:");
    const codigo = prompt("Código de la moto:");
    if (!nombre || !codigo) return;
    await addMoto({ nombre, codigo });
    cargarMotos();
});
cargarMotos();