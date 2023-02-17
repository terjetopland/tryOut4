// Component implementing a login screen
import React, {useState, Component} from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebaseConfig";
import {Button, Text, TextInput, View, StyleSheet} from "react-native";
import Register from "./Register";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import GoToButton from "./GoToButton";





// The prop setUser is a function that allows the parent component to get the logged-in user from this component
const Login = ({setUser}) => {
    // Component state, mirrors the input fields
    const [username, setUsername] = useState(''); // person1@person1.com
    const [password, setPassword] = useState(''); // Password1.


    // Logs in the user based on the value of the component state.
    // This function is called when the button declared below is pressed.
    const loginUser = () => {
        signInWithEmailAndPassword(auth, username, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(`User has been signed in: ${user.email}`);

                // Call the setter passed to us as a prop
                setUser(user);
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
            <GoToButton
                screenName={Register}/>
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
