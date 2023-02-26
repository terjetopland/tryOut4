import {collection, doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "../firebaseConfig";
import {Alert, Button, Text, TextInput, View} from "react-native";
import {useState} from "react";
import { classStyles} from "../styling/Standard";
import GoToButton from "./GoToButton";
import DeleteClassById from "./DeleteClassById";


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

        </View>
    );

}

export default AddClass;