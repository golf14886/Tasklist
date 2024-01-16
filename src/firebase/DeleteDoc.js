import { doc, deleteDoc } from "firebase/firestore";
import { db } from './firebase'
const DeleteDoc = async (id, docIdUser) => {
    try {
        await deleteDoc(doc(db, docIdUser, id));
        console.log(`ลบข้อมูล${id}`);
    } catch (error) {
        console.log("ลบข้อมูลไม่สำเร็จ" + error);
    }

}

export { DeleteDoc }