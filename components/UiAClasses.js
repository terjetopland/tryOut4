import { ScrollView, View, Text} from "react-native";
import {AddClasses} from "./AddUiAClasses";
import {GetUiAClassById} from "./GetUiAClassById";
import { GetAllUiAClasses } from "./GetAllUiAClasses";
import {useEffect, useState} from "react";
import {DataTable} from "react-native-paper";


function UiAClasses(){


    return (
        <ScrollView>
            <View>
                <AddClasses/>
                <GetUiAClassById/>
                <GetAllUiAClasses/>
            </View>
        </ScrollView>
    )
};

export default UiAClasses;