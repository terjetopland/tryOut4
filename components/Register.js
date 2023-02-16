import { useState} from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import {Button, TextInput, View, StyleSheet} from "react-native";



function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')


    const validatePassword = () => {
        let isValid = true;
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                setError('Passwords does not match')
            }
        }
        return isValid
    }


    const register = e => {
        e.preventDefault()
        setError('')
        if (validatePassword()) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log('User has registered');

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

            }
        }

        return (
            <View>
                <TextInput
                    placeholder={'Enter your email'}
                    onChangeText={setEmail}
                />
                <TextInput
                    placeholder={'Choose a strong password'}
                    //makes the password invisible
                    secureTextEntry
                    onChangeText={setPassword}
                />
                <TextInput
                    placeholder={'Confirm your password'}
                    secureTextEntry
                    onChangeText={setConfirmPassword}
                />
                <Button
                    color={'orange'}
                    title={'Register'}
                    onPress={register}
                />
            </View>
        )
    }

    const styles = StyleSheet.create({
        register: {
            flex: 1,
            marginTop: 40
        }
});

export default Register;