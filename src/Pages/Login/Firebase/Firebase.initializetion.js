import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const initializetion = () => {
  initializeApp(firebaseConfig);
};

export default initializetion;
