import { getAuth, signOut } from "firebase/auth";
import {View, Text, Button} from "react-native";
import { auth } from "../firebaseConfig";





const Logout = () => {
    const logOut = () => {
        auth
            .signOut()
            .then(() => console.log('User is logged out'))
    }

    return (
        <Button
            title={'Log out'}
            onPress={logOut}
        />
    );

}

export default Logout;