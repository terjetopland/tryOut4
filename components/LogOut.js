import { getAuth, signOut } from "firebase/auth";
import {View, Text, Button} from "react-native";
import { auth } from "../firebaseConfig";


const SignOut = () => {

 const signMeOut = () => {
     signOut(auth)
     .
         then(() => {
             return (
                 <View>
                     <Text>
                         You are now sign out!
                     </Text>
                 </View>
             );
         })
             .catch((error) => {
                 console.log('could not sign out');
             });
 }
    return (
        <Button
            title={'Sign out'}
            onPress={signMeOut}
        />
    );
}
export default SignOut;