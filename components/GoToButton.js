import {useNavigation} from "@react-navigation/native";
import {Button} from "react-native";

function GoToButton({screenName}){
    const navigation = useNavigation();

    return (
        <Button
            color={'green'}
            title={`Go to ${screenName.name}`}
            onPress={() => navigation.navigate(screenName)}
        />
    );
}

export default GoToButton;