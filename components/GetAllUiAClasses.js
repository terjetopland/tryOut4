import { collection, query, onSnapshot, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {FlatList, View, Text, ScrollView, ActivityIndicator} from "react-native";
import React, {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";


const GetAllUiAClasses = async () => {
    const [UiAClasses, setUiAClasses] = useState([]);
    const arrayToPushTO = [];

    useEffect( () => {

        async function getTheData() {
            const querySnapshot = await getDocs(collection(db, "classes"));
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
                arrayToPushTO.push({
                    id: doc.id, className: doc().className,
                });
            });
        }
        getTheData();
    }, [])

    setUiAClasses(arrayToPushTO);


}







export { GetAllUiAClasses }

// https://stackoverflow.com/questions/74418047/how-to-render-lists-using-react-native-and-firestore