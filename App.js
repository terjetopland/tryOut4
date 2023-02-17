// App.js
import * as React from 'react';
import {useState} from "react";
import {Button, View, Text, StyleSheet, ScrollView} from "react-native";
import "react-native-gesture-handler";
import Login from './components/Login';
import Register from "./components/Register";
import Logout from "./components/LogOut";








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
            <ScrollView style={baseStyles.overall}>
                <Text>
                    Now it worked fine!
                </Text>
                <Logout/>
            </ScrollView>
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