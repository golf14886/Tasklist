import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'
import { query, collection, where, getDocs } from 'firebase/firestore';
import { db } from "./firebase"
import { updateUser } from "./updateData"
import { getItemList } from './getItemList';



const onSingIn = async (email1, password2, handleClick, setOnUser, setItem) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email1, password2);
        const user = userCredential.user;
        console.log("User signed in:", user);


        handleClick();


        const q = await query(collection(db, 'users'), where('uidUser', '==', user.uid));
        const querySnapshot = await getDocs(q);


        if (!querySnapshot.empty) {
            const docIdUser = querySnapshot.docs[0].id
            setOnUser(docIdUser)
            getItemList(docIdUser)
                .then(result => {
                    setItem(result)
                })
                .catch(error => {
                    console.error("Error while setting item:", error);
                });
        }


        if (querySnapshot.docs.length > 0) {
            const newData = { status: true };
            updateUser(querySnapshot.docs[0].id, newData);
        } else {
            console.log("ไม่พบข้อมูลที่ตรงกับเงื่อนไขการค้นหา");
        }


    } catch (error) {
        console.error("Error logging in:", error);
    }
}



export { onSingIn }
