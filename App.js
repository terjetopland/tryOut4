// App.js
import * as React from 'react';
import {useState} from "react";
import {Button, View, Text, StyleSheet, ScrollView} from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer, useNavigation, useRoute} from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import Login from './components/Login';
import Register from "./components/Register";
import LoggedInScreen from "./components/LoggedInScreen";




const Stack = createNativeStackNavigator();
function StartScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Login}>
                <Stack.Screen name={'Login'} component={Login} />
                <Stack.Screen name={'Register'} component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
}

function Welcome() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={LoggedInScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
// JavaScript Lambda syntax
const App = () => {
    const [user, setUser] = useState('');

    if (!user) {
        return <StartScreen />
    }
    else {
        return <Welcome/>
        //https://stackoverflow.com/questions/71180046/react-native-expo-show-different-navigationcontainer-depending-on-whether-user
    }
}

export default App;