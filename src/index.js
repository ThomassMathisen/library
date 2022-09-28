import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBhWR3vQm5MwHuy_EwQkA-I6bmv9PQR2uk",
    authDomain: "library-f1240.firebaseapp.com",
    projectId: "library-f1240",
    storageBucket: "library-f1240.appspot.com",
    messagingSenderId: "255118784480",
    appId: "1:255118784480:web:f236ea98425ce6ad3add85"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

