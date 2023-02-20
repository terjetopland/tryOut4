import { getAuth, signOut } from "firebase/auth";
import {View, Text, Button, Alert} from "react-native";
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
        <View>
            <Button
                title={'Log out'}
                onPress={logOut}
            />
            <GoToButton screenName={Home}/>
        </View>
    );

}

export default Logout;