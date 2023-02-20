import { getAuth, signOut } from "firebase/auth";
import {View, Text, Button, Alert, StyleSheet} from "react-native";
import { auth } from "../firebaseConfig";
import GoToButton from "./GoToButton";
import Home from "./Home";
import {StackActions, useNavigation} from "@react-navigation/native";
import App from "../App";
import Login from "./Login";
import {isThenable} from "@babel/core/lib/gensync-utils/async";



const Logout = () => {
    const navigation = useNavigation();
    const logOut = () => {
        auth
            .signOut()
            .then(() => console.log('User is logged out'));
        Alert.alert('Success!', 'You are now logged out!');
    }

    return (
        <View style={{flex: 1}}>
            <View>
                <Button
                    title={'Log out'}
                    onPress={logOut}
                />
            </View>
            <View style={{flex: 1}}>
                <GoToButton screenName={Home}/>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputField: {
        fontSize: 20,
        backgroundColor: 'rgba(220, 220, 170, 0.4)'
    },
    message: {
        top: 10,
        fontSize: 200,
        backgroundColor: 'rgba(220, 220, 170, 0.4)',
        color: 'green'
    },
    logoutButton: {
        position: 'absolute',
        bottom: 50,
        right: 50,
        alignSelf: 'center'
    }
});

export default Logout;