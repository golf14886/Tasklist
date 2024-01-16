import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth, } from 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyCwVpfXeHtq2jDDmMl-0qFlAp3mjWu_BfE",
    authDomain: "tasklist-c0480.firebaseapp.com",
    projectId: "tasklist-c0480",
    storageBucket: "tasklist-c0480.appspot.com",
    messagingSenderId: "359222132750",
    appId: "1:359222132750:web:9418467362dc01ec42bc5f",
    measurementId: "G-DL5MGKY46Q"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);


export { db, auth };