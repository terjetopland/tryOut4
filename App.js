// App.js
import * as React from 'react';
import {useEffect, useState} from 'react';
import "react-native-gesture-handler";
import {auth, db} from "./firebaseConfig";
import LoginRegisterScreen from "./components/LoginRegisterScreen";
import LoggedInScreen from "./components/LoggedInScreen";
import {GetAllUiAClasses} from "./components/GetAllUiAClasses";
import {collection, getDocs} from "firebase/firestore";

// JavaScript Lambda syntax
const App = () => {
    const [user, setUser] = useState('');
    const [initializing, setInitializing] = useState(true);

    // update state of user (logged in or not)
    function onAuthStateChanged(user) {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    useEffect(()=> {
        return auth.onAuthStateChanged(onAuthStateChanged);
    }, []);


    if (initializing) return null;

    if (!user) {
        return (
            <LoginRegisterScreen/>
        );
    }
        return <LoggedInScreen/>



}

export default App;