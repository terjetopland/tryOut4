// App.js
import * as React from 'react';
import {useState, useEffect} from "react";
import {Button, View, Text, StyleSheet, ScrollView} from "react-native";
import "react-native-gesture-handler";

import Login from './components/Login';
import Register from "./components/Register";
import LoggedInScreen from "./components/LoggedInScreen";
import {auth} from "./firebaseConfig";



// JavaScript Lambda syntax
const App = () => {
    const [user, setUser] = useState('');
    const [initializing, setInitializing] = useState(true);

    function onAuthStateChanged(user) {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(()=> {
        const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, []);

    if (initializing) return null;

    if (!user) {
        return <Login setUser={setUser}/>
    }
        return <LoggedInScreen/>

}

export default App;