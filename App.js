// App.js
import * as React from 'react';
import {useState} from "react";
import Login from './components/Login';
import Register from "./components/Register";
import SignOut from "./components/LogOut";
import {Button, View, Text, StyleSheet, ScrollView} from "react-native";
import {getAuth} from "firebase/auth";





const App = () => {
    const [user, setUser] = useState('');

    if (!user) {
        return (
            <ScrollView style={baseStyles.overall}>
                <View>
                    <Register/>
                </View>
                <View>
                    <Login setUser={setUser}/>
                </View>
            </ScrollView>
        )}
    else {
        return (
            <View style={baseStyles.overall}>
                <Text>
                    Now it worked fine !!
                </Text>
                <SignOut/>
            </View>
        );
    }

}

const baseStyles = StyleSheet.create({
    overall: {
        marginTop: 100,
        textAlign: 'center',
        backgroundColor: 'rgba(180,255,240, 0.5)'
    }
});
export default App;