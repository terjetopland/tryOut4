import {Text, TextInput, StyleSheet, Button, View} from "react-native";
import React, {useEffect, useState} from "react";
import {auth, db} from "../firebaseConfig";
import {doc, getDoc } from "firebase/firestore";
import GoToButton from "./GoToButton";
import Logout from "./Logout";


const Home = () => {
    const [message, setMessage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Retrieve current user
    const user = auth.currentUser;

    useEffect(() => {
        const getFirstName = async () => {
            // document ref
            const docRef = doc(db, "users", user.uid);
            const docSnapshot = getDoc(docRef);

            if((await docSnapshot).exists()) {
                setFirstName((await docSnapshot).get("fName"));
                setLastName((await docSnapshot).get("lName"));
            }
        };

        getFirstName();
    }, []);


    return (
        <View >
                <Text>
                    Hello {firstName} {lastName}!!
                    Your email is {user.email} .
                </Text>
                <TextInput
                    placeholder={'Write your message here'}
                    value={message}
                    style={styles.inputField}
                    onChangeText={setMessage}/>
                <Button
                    title={'Refresh message'}
                    onPress={() => setMessage('')}
                />
               <Text style={styles.message}>
                    {message}
                </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputField: {
        fontSize: 20,
        backgroundColor: 'rgba(220, 220, 170, 0.4)'
    },
    message: {
        top: 10,
        fontSize: 30,
        height: 150,
        backgroundColor: 'rgba(220, 220, 170, 0.4)',
        color: 'green'
    }
});
export default Home;