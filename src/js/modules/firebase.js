// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
import {
    getFirestore,
    collection, 
    getDocs,
    addDoc,
    deleteDoc,
    doc

} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAAnP59Exq0909g9_urRwJM2Pa2EafwuOQ",
    authDomain: "mar-motos.firebaseapp.com",
    projectId: "mar-motos",
    storageBucket: "mar-motos.firebasestorage.app",
    messagingSenderId: "259410796967",
    appId: "1:259410796967:web:c5c5edafe58338f67e5682",
    measurementId: "G-RF2RTPK60W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { collection, getDocs, addDoc, deleteDoc, doc };

// export async function getMotos() {
//     const querySnapshot = await getDocs(collection(db, "motos"));
//     const data = [];
//     querySnapshot.forEach((doc) => {
//         data.push({ id: doc.id, ...doc.data() });
//     });
//     return data;
// }