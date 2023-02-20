// App.js
import * as React from 'react';
import {useEffect, useState} from 'react';
import "react-native-gesture-handler";
import LoggedInScreen from "./components/LoggedInScreen";
import {auth} from "./firebaseConfig";
import LoginRegisterStack from "./components/LoginRegisterContainer";
// JavaScript Lambda syntax
const App = () => {
    const [user, setUser] = useState('');
    const [initializing, setInitializing] = useState(true);

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
            <LoginRegisterStack/>
        );
    }
        return <LoggedInScreen/>

}

export default App;