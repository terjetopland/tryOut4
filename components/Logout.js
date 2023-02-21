import { getAuth, signOut } from "firebase/auth";
import {View, Text, Button, Alert, StyleSheet} from "react-native";
import { auth } from "../firebaseConfig";
import GoToButton from "./GoToButton";
import Home from "./Home";
import {useNavigation} from "@react-navigation/native";


const Logout = () => {
    const logOut = () => {
        auth
            .signOut()
            .then(() => console.log('User is logged out'));
        Alert.alert('Success!', 'You are now logged out!');
    }

    return (
        <View>
            <Button
                title={'Log out'}
                onPress={logOut}
            />
        </View>
    );

}


export default Logout;