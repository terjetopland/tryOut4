import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Register from "./Register";
import GoToButton from "./GoToButton";
import {View} from "react-native";
import {StandardSetupStyle} from "../styling/Standard";


const StackLoginRegister = createNativeStackNavigator();

const LoginScreen = () => {
    return (
        <View style={StandardSetupStyle.container}>
            <View style={StandardSetupStyle.restOfPage}>
                <Login/>
            </View>
            <View style={StandardSetupStyle.gotoButton}>
                <GoToButton screenName={Register}/>
            </View>
        </View>
    );
}

const RegisterScreen = () => {
    return (
        <View style={StandardSetupStyle.container}>
            <View style={StandardSetupStyle.restOfPage}>
                <Register/>
            </View>
            <View style={StandardSetupStyle.gotoButton}>
                <GoToButton screenName={Login}/>
            </View>
        </View>
    );
}

function LoginRegisterScreen() {
    return (
        <NavigationContainer>
            <StackLoginRegister.Navigator initialRouteName="Login">
                <StackLoginRegister.Screen name="Login" component={LoginScreen}/>
                <StackLoginRegister.Screen name="Register" component={RegisterScreen}/>
            </StackLoginRegister.Navigator>
        </NavigationContainer>
    );
}


export default LoginRegisterScreen;