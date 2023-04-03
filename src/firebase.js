import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB6DCY2RQmtzVZnN_iueBLPf7sDubJmdrQ",
  authDomain: "poderdigitalperiferico.firebaseapp.com",
  projectId: "poderdigitalperiferico",
  storageBucket: "poderdigitalperiferico.appspot.com",
  messagingSenderId: "733192273001",
  appId: "1:733192273001:web:41c8c098d71b380c3c36f8",
  measurementId: "G-GP43ZETPVQ"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);