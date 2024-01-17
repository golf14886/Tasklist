import { db } from "./firebase";
import { doc, updateDoc, } from 'firebase/firestore';

const updateUser = async (documentId, newData) => {
    try {
        const userDocRef = doc(db, "users", documentId);
        await updateDoc(userDocRef, newData);
        console.log("เอกสารถูกอัพเดตสำเร็จแล้ว");
    } catch (error) {
        console.error("เกิดข้อผิดพลาดในการอัพเดตเอกสาร: ", error);
    }
};



const updateOut = async (docId) => {
    try {
        const documentRef = await doc(db, 'users', docId);
        await updateDoc(documentRef, {
            status: false,
        });
        console.log("ออกจากระบบสำเร็จแล้ว");
    } catch (error) {
        console.error("เกิดข้อผิดพลาดในการออกจากระบบ: ", error);
    }
}


const updateDescription = async (editedDescription, docIdUser, id) => {
    const frankDocRef = doc(db, docIdUser, id);
    await updateDoc(frankDocRef, {
        description: editedDescription
    });
}

const updatecomplete = async (docIdUser, id, itemComplete) => {
    try {
        const frankDocRef = doc(db, docIdUser, id);
        await updateDoc(frankDocRef, {
            complete: !itemComplete
        });
    } catch (error) {
        console.error("Error updating document: ", error);
    }
}




export { updateUser, updateOut, updateDescription, updatecomplete }
