import { db, collection, getDocs, addDoc } from "../modules/firebase.js";

const COLLECTION = "motos";

export async function getMotos() {
  const querySnapshot = await getDocs(collection(db, COLLECTION));
  const motos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return motos;
}


export async function addMoto(data) {
  addDoc(collection(db, COLLECTION), data)
    .then(() => console.log("Sincronizado con Firebase"))
    .catch(err => console.error("Error al subir:", err));

  return newMoto;
}