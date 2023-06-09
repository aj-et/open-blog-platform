import { db } from "../utils/firebase";
import { collection } from "firebase/firestore";
import { getDocs } from "firebase/firestore";



const fetchPostData = async () => {
    try {
      const dbRef = collection(db,"Posts");
      const snapshot = await getDocs(dbRef);
      const fetchedData = snapshot.docs.map((doc) => doc.data());
      return fetchedData;
    } catch (error) {
      console.log('Error fetching data:', error);
      return null;
    }
  };

export default fetchPostData