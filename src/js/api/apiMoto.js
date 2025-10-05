import { db, collection, getDocs, addDoc } from "../modules/firebase.js";
import { saveToLocal, loadFromLocal } from "../local.js";

const COLLECTION = "motos";
const CACHE_KEY = "motos_cache";

export async function getMotos() {

    const localData = loadFromLocal(CACHE_KEY);
    if (localData.length) return localData;

    // 2️⃣ Luego traer de Firebase
    const querySnapshot = await getDocs(collection(db, COLLECTION));
    const motos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    saveToLocal(CACHE_KEY, motos);
    return motos;
}


export async function addMoto(data) {
  // Guardar primero localmente para velocidad
  const motos = loadFromLocal(CACHE_KEY);
  const newMoto = { ...data, id: Date.now().toString() };
  motos.push(newMoto);
  saveToLocal(CACHE_KEY, motos);

  // Luego subir a Firebase (sin bloquear)
  addDoc(collection(db, COLLECTION), data)
    .then(() => console.log("Sincronizado con Firebase"))
    .catch(err => console.error("Error al subir:", err));

  return newMoto;
}