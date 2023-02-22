import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logout from "./Logout";
import Home from "./Home";
import GoToButton from "./GoToButton";
import {View} from "react-native";
import {StandardSetupStyle} from "../styling/Standard";

const StackLoggedIn = createNativeStackNavigator();

const HomeScreen = () => {
    return (
        <View style={StandardSetupStyle.container}>
            <View style={StandardSetupStyle.restOfPage}>
                <Home/>
            </View>
            <View style={StandardSetupStyle.gotoButton}>
                <GoToButton screenName={Logout}/>
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
                <GoToButton screenName={Home}/>
            </View>
        </View>
    )
}

function HomeStack() {
    return (
        <NavigationContainer>
            <StackLoggedIn.Navigator>
                <StackLoggedIn.Screen name="Home" component={HomeScreen}/>
                <StackLoggedIn.Screen name="Logout" component={LogoutScreen}/>
            </StackLoggedIn.Navigator>
        </NavigationContainer>
    );
}



export default HomeStack;