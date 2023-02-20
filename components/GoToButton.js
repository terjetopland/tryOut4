import {useNavigation} from "@react-navigation/native";
import {Button} from "react-native";
import Login from "./Login";

function GoToButton({screenName}){
    const navigation = useNavigation();

    return (
        <Button
            title={`Go to ${screenName.name}`}
            onPress={() => navigation.navigate(screenName)}
        />
    );
}

export default GoToButton;