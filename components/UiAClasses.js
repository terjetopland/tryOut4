import {Button, ScrollView, View} from "react-native";
import {AddClasses} from "./AddUiAClasses";
import {GetUiAClassById} from "./GetUiAClassById";
import { GetAllUiAClasses } from "./GetAllUiAClasses";


const UiAClasses = ()   => {
    return (
        <ScrollView>
            <View>
                <AddClasses/>
                <GetUiAClassById/>
                < GetAllUiAClasses/>
            </View>
        </ScrollView>
    )
};

export default UiAClasses;