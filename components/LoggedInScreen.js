import {ScrollView, Text} from "react-native";
import Home from "./Home";
import React from "react";
import {useState} from "react";
import { NavigationContainer, useNavigation, useRoute} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoToButton from "./GoToButton";
import Logout from "./Logout";

const StackLoggedIn = createNativeStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>
            <StackLoggedIn.Navigator>
                <StackLoggedIn.Screen name="Home" component={Home}/>
                <StackLoggedIn.Screen name="Logout" component={Logout}/>
            </StackLoggedIn.Navigator>
        </NavigationContainer>
    );
}


export default MyStack;