import {StyleSheet, View, Text, Button, TextInput, Alert, ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
import {GetClasses} from "../functions/GetClasses";
import {DataTable} from "react-native-paper";



const AddClass =  () => {
    const [classID, setClassID] = useState('');
    const [className, setClassName] = useState('');
    const [hint, setHint] = useState('');
    const [placeholderId, setPlaceholderId] = useState('Enter class Id');
    const [placeholderName, setPlaceholderName] = useState('Enter class name');


    async function handleSubmit(event) {
        event.preventDefault();

        if(className === '' || classID === '' || classID === '' && className === '') {
            return setHint('Fill in both fields!')
        }
        const classCollectionRef = collection(db, "classes");

        // Check first if doc already exists
        const classDocRef = doc(db, "classes", classID);
        const checkIfDocAlreadyExists = await getDoc(classDocRef);
        if ((await checkIfDocAlreadyExists).exists()) {
            setHint('Document already exists');
            console.log('Document already exists');

        } else {
            setDoc(doc( classCollectionRef, classID), {
                className: className
            }).then(() => {
                console.log('Edited class');
                Alert.alert('Class with id ' + classID +' was changed.',
                    'Class info:\n' +
                    'ClassID: ' + classID + '\n' +
                    'Class name: ' + className)
            });
            setClassName('');
            setClassID('');
            setHint('');
        }





    }

    function refreshInputField() {
        setClassID('');
        setClassName('');
        setHint('');
        setPlaceholderId('Enter a new Id')
        setPlaceholderName('Enter a new name')
    }

    return (
        <View>
            <TextInput
                style={classStyles.input}
                value={classID}
                placeholder={placeholderId}
                onChangeText={setClassID}
            />
            <TextInput
                style={classStyles.input}
                value={className}
                placeholder={placeholderName}
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

function GetAllUiAClasses () {
    const [UiAClasses, setUiAClasses] = useState([]);

    useEffect(() => {

        const getTheClasses = async () => {
            await GetClasses(setUiAClasses)
        }
        getTheClasses().then(() => {
            console.log('Loading classes')
        });
    }, [])

    return (
        <View style={{marginTop: 20}}>
            <Text style={{fontSize: 40, color: 'green'}}>
                All classes at UiA:
            </Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Class id</DataTable.Title>
                    <DataTable.Title>Class name</DataTable.Title>
                </DataTable.Header>
                {UiAClasses.map(classes => {
                    return (
                        <DataTable.Row key={classes.id}>
                            <DataTable.Cell>{classes.id}</DataTable.Cell>
                            <DataTable.Cell>{classes.className}</DataTable.Cell>
                        </DataTable.Row>
                    )
                })}
            </DataTable>
        </View>
    )
}

const GetUiAClassById = () => {
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

function UiAClasses(){


    return (
        <ScrollView>
            <View>
                <AddClass/>
                <GetUiAClassById/>
                <GetAllUiAClasses/>
            </View>
        </ScrollView>
    )
};
export { UiAClasses }
