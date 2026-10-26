import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD0RcxpQeIMyWaXeZd7qN-bqeMuIJzzYC4",
  authDomain: "renta-de-apartamento-prueba.firebaseapp.com",
  projectId: "renta-de-apartamento-prueba",
  storageBucket: "renta-de-apartamento-prueba.firebasestorage.app",
  messagingSenderId: "641805724339",
  appId: "1:641805724339:web:c1146756e0dbf531949ec6",
  measurementId: "G-R53BB3V3HG",
};

const app = initializeApp(firebaseConfig);

const analiticaLista = isSupported()
  .then((soportado) => (soportado ? getAnalytics(app) : null))
  .catch(() => null);

export async function registrarEvento(nombre, parametros = {}) {
  const analytics = await analiticaLista;
  if (!analytics) return;
  logEvent(analytics, nombre, parametros);
}
