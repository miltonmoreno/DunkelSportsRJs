import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCnrrCYHcabSFZ1RYqI8GP8VRSJ5gJHjRk",
    authDomain: "dunkelsports-65497.firebaseapp.com",
    projectId: "dunkelsports-65497",
    storageBucket: "dunkelsports-65497.firebasestorage.app",
    messagingSenderId: "1093162473777",
    appId: "1:1093162473777:web:a7466aa945158c95d37810"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db