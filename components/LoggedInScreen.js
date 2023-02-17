import {ScrollView, Text} from "react-native";
import Logout from "./LogOut";


const LoggedInScreen = () => {
   return (
        <ScrollView>
            <Text>
                Now it worked fine!
            </Text>
            <Logout/>
        </ScrollView>
    );
}

export default LoggedInScreen;