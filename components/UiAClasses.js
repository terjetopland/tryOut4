import { ScrollView, View} from "react-native";
import {AddClasses} from "./AddUiAClasses";
import {GetUiAClassById} from "./GetUiAClassById";
import { GetAllUiAClasses } from "./GetAllUiAClasses";
import {useEffect, useState} from "react";
import {DataTable} from "react-native-paper";


function UiAClasses(){
    const [UiAClasses, setUiAClasses] = useState([]);

    useEffect(() => {
        const getTheClasses = async () => {
            GetAllUiAClasses(setUiAClasses)
        }
        getTheClasses().then(() => {
            console.log('Loading classes')
        });
        }, [])


    return (
        <ScrollView>
            <View>
                <AddClasses/>
                <GetUiAClassById/>
            </View>
            <View>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>Class id</DataTable.Title>
                        <DataTable.Title>Class name</DataTable.Title>
                    </DataTable.Header>
                    {UiAClasses.map(classes => {
                        return (
                            <DataTable.Row key={classes.id}>
                                <DataTable.Cell>{classes.id}</DataTable.Cell>
                                <DataTable.Cell>{classes.className}</DataTable.Cell>
                            </DataTable.Row>
                        )
                    })}
                </DataTable>
            </View>
        </ScrollView>
    )
};

export default UiAClasses;