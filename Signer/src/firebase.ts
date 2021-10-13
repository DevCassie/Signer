import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAR7ugQLLj1J8EtcZIPmruV_527puhP5og",
    authDomain: "signer-3b266.firebaseapp.com",
    projectId: "signer-3b266",
    storageBucket: "signer-3b266.appspot.com",
    messagingSenderId: "17718082970",
    appId: "1:17718082970:web:89b0cbe9bba88374140e23",
    measurementId: "G-1E6V5WWJVM"
}; 

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export default app;