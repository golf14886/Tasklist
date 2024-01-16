import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase"
import { addlist } from './addData';


const userData = {
    uid: "",
    email: "",
    status: false
}

export async function signUpWithEmailAndPassword(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = await userCredential.user;
        userData.uid = await user.uid
        userData.email = await user.email
        console.log("User signed up:", user);
        addlist(userData);

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorCode, errorMessage);
    }
}




