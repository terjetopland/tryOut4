// App.js
import * as React from 'react';
import {useEffect, useState} from 'react';
import "react-native-gesture-handler";
import {auth} from "./firebaseConfig";
import LoginRegisterScreen from "./components/LoginRegisterScreen";
import HomeStack from "./components/LoggedInScreen";
import {GetAllUiAClasses} from "./components/GetAllUiAClasses";

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
        return <HomeStack/>

}

export default App;