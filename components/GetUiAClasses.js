import {doc, getDoc} from "firebase/firestore";
import {db} from "../firebaseConfig";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import React, {useEffect, useState} from "react";

const GetClass = () => {
    const [classID, setClassID] = useState('');
    const [className, setClassName] = useState('');
    const [viewText, setViewText] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        if (classID === '') {
            return console.log('Nothing was entered');
        } else {
                const classDocRef = doc(db, "classes", classID);
                const classDocRefSnap = await getDoc(classDocRef);

                if ((await classDocRefSnap).exists()) {
                    setClassName((await classDocRefSnap).get("className"));
                    console.log('class name was ' + className);
                    setViewText('Class name with class id ' + classID + ' is ' + className);
                } else {
                    console.log('No such document is stored in db!');
                    setViewText('There was no class with the id ' + classID +
                                '\nAre you sure you spelled it correct');
                }
            }
    }

    const ViewResultOnlyIfFound = () => {
            return (
                <Text>
                    {viewText}
                </Text>
            )

    }

    return (
        <View>
            <View>
                <TextInput
                    style={classStyles.input}
                    value={classID}
                    onChangeText={setClassID}
                    placeholder={'Enter a class id'}
                />
                <Button
                    title={'Submit'}
                    onPress={handleSubmit}
                />
                <ViewResultOnlyIfFound/>
            </View>
        </View>
    )
}


const classStyles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    redHintText: {
        marginTop: 40,
        color: 'red',
        fontSize: 40,
    }
});

export { GetClass }