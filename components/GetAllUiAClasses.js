import {useEffect, useState} from "react";
import {GetClasses} from "../functions/GetClasses";
import {Text, View} from "react-native";
import {DataTable} from "react-native-paper";
import {onSnapshot} from "firebase/firestore";



function GetAllUiAClasses () {
    const [UiAClasses, setUiAClasses] = useState([]);

    useEffect(() => {

        const getTheClasses = async () => {
           await GetClasses(setUiAClasses)
        }
        getTheClasses().then(() => {
            console.log('Loading classes')
        });
    }, [])

    return (
        <View style={{marginTop: 20}}>
            <Text style={{fontSize: 40, color: 'green'}}>
                All classes at UiA:
            </Text>
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
    )
}

export  { GetAllUiAClasses }