import {Text, TextInput, StyleSheet, Button, View} from "react-native";
import React, {useEffect, useState} from "react";
import {auth, db} from "../firebaseConfig";
import {doc, getDoc } from "firebase/firestore";
import {setCities} from "./TestCitiesFirestore";



const Home = () => {
    const [message, setMessage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [arrayOfStudents, setArrayOfStudents] = useState([]);

    // Retrieve current user
    const user = auth.currentUser;

    useEffect(() => {
        const getNames = async () => {
            // document ref
            const docRef = doc(db, "users", user.uid);
            const docSnapshot = getDoc(docRef);

            if((await docSnapshot).exists()) {
                setFirstName((await docSnapshot).get("fName"));
                setLastName((await docSnapshot).get("lName"));
            }
        };

        getNames();
    }, []);

    useEffect(() => {
        const getStudents = async () => {
            const studentRef = doc(db, "classes", "IKT205", "students" );
            const studentSnapshot = getDoc(studentRef);

            if((await studentSnapshot).exists()) {
                setArrayOfStudents()
            }
        }
    })

    return (
        <View >
                <Text>
                    Hello {firstName} {lastName}!!
                </Text>
                <Text>
                    Your email is {user.email} .
                </Text>
            <Button
                title={'Add cities'}
                onPress={setCities}
            />
        </View>
    );
}


export default Home;