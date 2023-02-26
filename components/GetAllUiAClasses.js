import { View, Text, Button, TextInput,ScrollView} from "react-native";
import React, {useEffect, useState} from "react";
import {GetClasses} from "../functions/GetClasses";
import {DataTable} from "react-native-paper";
import {StandardSetupStyle, classStyles} from "../styling/Standard";
import GoToButton from "./GoToButton";
import AddClass from "./AddClass";
import { useNavigation, useRoute} from "@react-navigation/native";
import DeleteClassById from "./DeleteClassById";



const GetAllUiAClasses = () => {
    const [UiAClasses, setUiAClasses] = useState([]);
    const navigation = useNavigation();



    useEffect(() => {

        const getTheClasses = async () => {
            await GetClasses(setUiAClasses)
        }
        getTheClasses().then(() => {
            console.log('Loading classes')
        });
    }, [])

    return (
        <View style={StandardSetupStyle.container}>
            <View style={StandardSetupStyle.restOfPage}>
                <View>
                    <GoToButton screenName={AddClass} />
                    <GoToButton screenName={DeleteClassById}/>
                </View>
                <ScrollView>
                    <DataTable>
                        <DataTable.Header>
                            <DataTable.Title>Class id</DataTable.Title>
                            <DataTable.Title>Class name</DataTable.Title>
                        </DataTable.Header>
                        {UiAClasses.map(classes => {
                            return (
                                <DataTable.Row key={classes.id} >
                                    <DataTable.Cell>{classes.id}</DataTable.Cell>
                                    <DataTable.Cell>{classes.className}</DataTable.Cell>
                                </DataTable.Row>
                            )
                        })}
                    </DataTable>
                </ScrollView>
            </View>
        </View>

    )
}





export default GetAllUiAClasses;
