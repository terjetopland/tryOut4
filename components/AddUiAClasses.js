import { StyleSheet, View, Text, Button, TextInput, Alert} from "react-native";
import React, {useEffect, useState} from "react";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";


const AddClasses =  () => {
    const [classID, setClassID] = useState('');
    const [className, setClassName] = useState('');
    const [hint, setHint] = useState('');


    async function handleSubmit(event) {
        event.preventDefault();
        if(className === '' || classID === '' || classID === '' && className === '') {
            return setHint('Fill in both fields!')
        }
        const classCollectionRef = collection(db, "classes");
        setDoc(doc( classCollectionRef, classID), {
            className: className
        }).then(() => {
            console.log('Added class');
            Alert.alert('Class was added',
                'Class info:\n' +
                            'ClassID: ' + classID + '\n' +
                            'Class name: ' + className)
        });
        setClassName('');
        setClassID('');
        setHint('');
    }

    function refreshInputField() {
        setClassID('');
        setClassName('');
        setHint('');
    }


    return (
        <View>
            <TextInput
                style={classStyles.input}
                value={classID}
                placeholder={'Enter class Id'}
                onChangeText={setClassID}
            />
            <TextInput
                style={classStyles.input}
                value={className}
                placeholder={'Enter class name'}
                onChangeText={setClassName}
            />
            <Button
                title={'Add class'}
                onPress={handleSubmit}
                />
            <Button
                color={'orange'}
                title={'Refresh input fields'}
                onPress={refreshInputField}
            />
            <Text style={classStyles.redHintText}>
                {hint}
            </Text>
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
export { AddClasses }