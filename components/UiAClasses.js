import {Button, ScrollView, View} from "react-native";
import {AddClasses} from "./AddUiAClasses";
import {GetClass} from "./GetUiAClasses";



const UiAClasses = ()   => {
    return (
        <ScrollView>
            <AddClasses/>
            <GetClass/>
        </ScrollView>
    )
};

export default UiAClasses;