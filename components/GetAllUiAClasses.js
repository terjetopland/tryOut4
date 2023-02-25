import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

async function GetAllUiAClasses(setUiAClasses) {
    const classesList = [];

    const querySnapshot = await getDocs(collection(db, "classes"));
    querySnapshot.forEach(doc => {
        const {className} = doc.data();
        console.log(doc.id, " => ", doc.data());
        classesList.push({
            id: doc.id,
            className,
        })
    });
    setUiAClasses(classesList);
};





export { GetAllUiAClasses };

