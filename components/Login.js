import React, {useState} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebaseConfig";
import {Button, TextInput, View, StyleSheet, Alert} from "react-native";






// The prop setUser is a function that allows the parent component to get the logged-in user from this component
const Login = () => {
    // Component state, mirrors the input fields
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    // Logs in the user based on the value of the component state.
    // This function is called when the button declared below is pressed.
    const loginUser = () => {
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`User has been signed in: ${user.email}`);
                Alert.alert('Success!', 'You are now logged in!');

                // Call the setter passed to us as a prop
                //setUser(user); If using this, u have to add {setUser} as parameter in Login.
            })
            .catch((error) => {
                console.log(`Error: ${error.code} ${error.message}`);
                //const errorCode = error.code;
                //const errorMessage = error.message;
            });
    }


    return (
        <View>
            <TextInput
                style={loginStyles.input}
                placeholder={'Email'}
                onChangeText={setUsername}
                keyboardType="email-address"
            />
            <TextInput
                style={loginStyles.input}
                placeholder={'Password'}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <Button
                onPress={loginUser}
                title="Log in"
            />
        </View>
    );
}

const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    input: {
        backgroundColor: 'cornsilk',
        height: 40,
        padding: 4,
    }
});

export default Login;
