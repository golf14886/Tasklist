import { signOut } from "firebase/auth";
import { updateOut } from "../firebase/updateData"
import { auth } from "./firebase"

function deleteCookie(name) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

const onSignOut = async (docIdUser) => {
    try {
        await updateOut(docIdUser)
        await signOut(auth)
        deleteCookie("userData");
        console.log("Sign - out successful");
    } catch (error) {
        console.log("An error happened" + error);
    }
}

export { onSignOut }