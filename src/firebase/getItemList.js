import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';



const getItemList = async (docIdUser) => {
    try {
        const querySnapshot = await getDocs(collection(db, docIdUser));
        const data = await querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return data;
    } catch (error) {
        console.error('Error fetching data from Firestore:', error);
    }
}


export { getItemList }
