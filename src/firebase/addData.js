import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';

const addlist = async (user) => {
    try {
        await addDoc(collection(db, "users"), {
            uidUser: user.uid,
            email: user.email,
            status: user.status,
        })

    } catch (error) {
        console.log(error);
    }

}

export { addlist }






// try {
//     const docRef = await addDoc(collection(db, "users"), {
//         Email: "Ada",
//         id: "Lovelace",
//         text: ""
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }