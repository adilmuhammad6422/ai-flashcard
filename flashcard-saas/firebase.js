import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyATt-Ke7FEHrSzPluEXHhulf0YTEp4r9gU",
  authDomain: "flashcard-ai-a5467.firebaseapp.com",
  projectId: "flashcard-ai-a5467",
  storageBucket: "flashcard-ai-a5467.appspot.com",
  messagingSenderId: "1013096223499",
  appId: "1:1013096223499:web:83e0d2ee6bbc0ab702080e",
  measurementId: "G-26R5GFVDVC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
