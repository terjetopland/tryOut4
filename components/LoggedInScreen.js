import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logout from "./Logout";
import Home from "./Home";
import UiAClasses from "./UiAClasses";
import GoToButton from "./GoToButton";
import {Button, View} from "react-native";
import {StandardSetupStyle} from "../styling/Standard";




const StackLoggedIn = createNativeStackNavigator();

const HomeScreen = () => {
    return (
        <View style={StandardSetupStyle.container}>
            <View style={StandardSetupStyle.restOfPage}>
                <Home/>
                <GoToButton screenName={UiAClasses}/>
            </View>
            <View style={StandardSetupStyle.gotoButton}>
                <GoToButton screenName={Logout} color={'green'}/>
            </View>
        </View>
    )
}

const LogoutScreen = () => {
    return (
        <View style={StandardSetupStyle.container}>
            <View style={StandardSetupStyle.restOfPage}>
                <Logout/>
            </View>
            <View style={StandardSetupStyle.gotoButton}>
                <GoToButton screenName={Home} color={'green'}/>
            </View>
        </View>
    )
}
const UiAClassesScreen = () => {
    return (
        <View style={StandardSetupStyle.container}>
            <View style={StandardSetupStyle.restOfPage}>
                <UiAClasses/>
            </View>
            <View style={StandardSetupStyle.gotoButton}>
                <GoToButton screenName={Home} color={'green'}/>
            </View>
        </View>
    )
}



function LoggedInScreen() {
    //remember that name must match an exported component!! component is locally here
    return (
        <NavigationContainer>
            <StackLoggedIn.Navigator>
                <StackLoggedIn.Screen name="Home" component={HomeScreen}/>
                <StackLoggedIn.Screen name="Logout" component={LogoutScreen}/>
                <StackLoggedIn.Screen name="UiAClasses" component={UiAClassesScreen}/>
            </StackLoggedIn.Navigator>
        </NavigationContainer>
    );
}



export default LoggedInScreen;