import { getMotos, addMoto } from "../api/apiMoto.js";

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalForm = document.getElementById("modalForm");
const nombreInput = document.getElementById("nombreInput");
const codigoInput = document.getElementById("codigoInput");
const btnEliminar = document.getElementById("btnEliminar");
const btnClose = document.getElementById("modalClose");
const lista = document.getElementById("lista-motos");

let currentMotoId = null; // si es null → modo crear


function openModal(editMode = false, moto = null) {

    if (editMode && moto) {
        modalTitle.textContent = "Editar Moto";
        nombreInput.value = moto.nombre;
        codigoInput.value = moto.sticker;
        currentMotoId = moto.id;
        btnEliminar.classList.remove("hidden");
        console.log("true");
    } else {
        modalTitle.textContent = "Crear Moto";
        nombreInput.value = "";
        codigoInput.value = "";
        currentMotoId = null;
        btnEliminar.classList.add("hidden");
        console.log("false");
    }
 modal.classList.remove("hidden");
}

// Cerrar modal
function closeModal() {
    modal.classList.add("hidden");
}

// Crear o actualizar
modalForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const nombre = nombreInput.value.trim();
    const sticker = codigoInput.value.trim();
    if (!nombre || !sticker) return alert("Completa todos los campos");

    if (currentMotoId) {
        await updateMoto(currentMotoId, { nombre, sticker });
    } else {
        await addMoto({ nombre, sticker });
    }

    closeModal();
    renderAllMotos(); // refresca la lista
});

// Eliminar moto
btnEliminar.addEventListener("click", async () => {
    if (confirm("¿Seguro que deseas eliminar esta moto?")) {
        await deleteMoto(currentMotoId);
        closeModal();
        renderAllMotos();
    }
});

// Cerrar modal
btnClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(); // cerrar al hacer clic fuera
});

// Escuchar click en cards
lista.addEventListener("click", (e) => {
    const card = e.target.closest("[data-id]");
    if (card) {
        const moto = {
            id: card.dataset.id,
            nombre: card.dataset.nombre,
            sticker: card.dataset.sticker
        };
        openModal(true, moto);
    }
});

document.getElementById("btnAgregar").addEventListener("click", () => openModal());


async function cargarMotos() {

    const contenedor = document.querySelector("#lista-motos");
    contenedor.innerHTML = `<p class="text-gray-500">Cargando...</p>`;


    // try {
    //     const motos = await getMotos();
    //     if (motos.length === 0) {
    //         contenedor.innerHTML = `<p class="text-gray-500">No hay motos registradas.</p>`;
    //         return;
    //     }


    //     contenedor.innerHTML = motos.map(moto => `
    //         <div class="bg-white dark:bg-background-dark/50 p-4 rounded-xl shadow-sm text-center">
    //             <p class="text-lg font-semibold text-gray-800 dark:text-gray-100">${moto.sticker}</p>
    //             <div class="mt-4 grid grid-cols-2 gap-4 text-sm">
    //                 <div>
    //                 <p class="text-gray-500 dark:text-gray-400">Nombre:</p>
    //                 <p class="font-medium text-gray-800 dark:text-gray-100"> ${moto.nombre}</p>
    //             </div>
    //             <div>
    //                 <p class="text-gray-500 dark:text-gray-400">Trabajador de:</p>
    //                 <p class="font-medium text-gray-800 dark:text-gray-100"> ${moto.responsable}</p>
    //             </div>
    //             <div>
    //             <p class="text-gray-500 dark:text-gray-400">Placa:</p>
    //                 <p class="font-medium text-gray-800 dark:text-gray-100"> ${moto.placa}</p>
    //             </div>
    //             <div>
    //                 <p class="text-gray-500 dark:text-gray-400">Color:</p>
    //                 <p class="font-medium text-gray-800 dark:text-gray-100"> ${moto.color}</p>
    //             </div>
    //             <div>
    //                 <p class="text-gray-500 dark:text-gray-400">Moto:</p>
    //                 <p class="font-medium text-gray-800 dark:text-gray-100"> ${moto.moto}</p>
    //             </div>
    //             <div>
    //                 <p class="text-gray-500 dark:text-gray-400">Telefono:</p>
    //                 <p class="font-medium text-gray-800 dark:text-gray-100"> ${moto.telefono}</p>
    //             </div>
    //         </div>
    //     </div>
    // `).join('');

    // } catch (error) {
    //     contenedor.innerHTML = `<p class="text-red-500">Error cargando datos: ${error.message}</p>`;
    // }



    // 





}

// btnAgregar.addEventListener("click", async () => {
//     const nombre = prompt("Nombre de la moto:");
//     const codigo = prompt("Código de la moto:");
//     if (!nombre || !codigo) return;
//     await addMoto({ nombre, codigo });
//     cargarMotos();
// });

cargarMotos();