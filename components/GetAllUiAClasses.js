import { collection, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {FlatList, View, Text} from "react-native";
import React, {useEffect, useState} from "react";





const GetAllUiAClasses = async ()  =>{

        const [collectionArray, setCollectionArray] = useState([]);

        useEffect(() => {
            const getCollection = async () => {
                const collectionRef = collection(db,'my-collection');
                const querySnapshot = await collectionRef.get();
                const newArray = [];
                querySnapshot.forEach((documentSnapshot) => {
                    newArray.push({
                        id: documentSnapshot.id,
                        ...documentSnapshot.data(),
                    });
                });
                setCollectionArray(newArray);
            };
            getCollection();
        }, []);

        const renderItem = ({ item }) => (
            <View>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
            </View>
        );

        return (
            <FlatList
                data={collectionArray}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        );
};

export { GetAllUiAClasses }