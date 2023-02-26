import {doc, deleteDoc, getDoc} from "firebase/firestore";
import React, {useState} from "react";
import {db} from "../firebaseConfig";
import {Button, TextInput, View} from "react-native";
import {classStyles} from "../styling/Standard";
import {useRoute} from "@react-navigation/native";



const DeleteClassById = () => {
    const [classID, setClassID] = useState('');



    async function handleSubmit(event) {
        event.preventDefault();
        if (classID === '') {
            return console.log('Nothing was entered');
        } else {
            const classDocRef = doc(db, "classes", classID);
            await deleteDoc(classDocRef).then(() => {
                console.log('class with ' + classID + ' was deleted!');
            });
        }
    }


    return (
        <View>
            <View>
                <TextInput
                    style={classStyles.input}
                    value={classID}
                />
                <Button
                    title={'Submit'}
                    onPress={handleSubmit}
                />

            </View>
        </View>
    )
}

export default DeleteClassById;