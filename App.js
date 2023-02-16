// App.js
import * as React from 'react';
import {useState} from "react";
import Login from './components/Login';
import Register from "./components/Register";
import {Button, View, Text, StyleSheet} from "react-native";




const App = () => {
    const [user, setUser] = useState('');

    if (!user) {
        return (
            <View style={baseStyles.overall}>
                <View>
                    <Register/>
                </View>
                <View>
                    <Login setUser={setUser}/>
                </View>
            </View>
        )}
    else {
        return (
            <View style={baseStyles.overall}>
                <Text>
                    Now it worked fine!!
                </Text>
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