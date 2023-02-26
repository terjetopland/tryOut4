import {View, Button, Alert} from "react-native";
import { auth } from "../firebaseConfig";
import React from "react";
import {StandardSetupStyle} from "../styling/Standard";


const Logout = () => {
    const logOut = () => {
        auth
            .signOut()
            .then(() => console.log('User is logged out'));
        Alert.alert('Success!', 'You are now logged out!');
    }

    return (

        <View style={StandardSetupStyle.container}>
            <View style={StandardSetupStyle.restOfPage}>
                <Button
                    title={'Log out'}
                    onPress={logOut}
                />
            </View>
        </View>
    );

}


export default Logout;