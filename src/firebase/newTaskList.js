import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase';

export const newTaskList = async (docIdUser, addNewItem) => {
    const tasksCollection = await collection(db, docIdUser);
    const newTask = {
        description: addNewItem,
        complete: false,
    };
    try {
        const docRef = await addDoc(tasksCollection, newTask);
        console.log('เพิ่มข้อมูลเรียบร้อยแล้ว! Document ID:', docRef.id);

    } catch (error) {
        console.log("เพิ่มข้อมูลไม่legiH0" + error);
    }

}