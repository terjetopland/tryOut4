import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";


async function GetClasses(setUiAClasses) {
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

   /* collection(db, 'classes').onSnapshot((querySnapshot) => {
        querySnapshot.forEach(doc => {

            const {className} = doc.data();
            classesList.push({
                id: doc.id,
                className,
            })
            setUiAClasses(uiAClasses)
        })
    })

*/



};





export { GetClasses };
