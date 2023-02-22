import {Text, TextInput, StyleSheet, Button, View} from "react-native";
import React, {useEffect, useState} from "react";
import {auth, db} from "../firebaseConfig";
import {doc, getDoc } from "firebase/firestore";
import {setCities} from "./TestCitiesFirestore";
import {AddClasses} from "./AddUiAClasses";
import { GetClass } from "./GetUiAClasses";


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


    return (
        <View >
            <View>
                <Text>
                    Hello {firstName} {lastName}!!
                </Text>
                <Text>
                    Your email is {user.email} .
                </Text>
            </View>
        </View>
    );
}

const homeStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    hello: {
        flex: 1
    },
    addClass: {
        flex: 2
    },
});

export default Home;