import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Register from "./Register";


const StackLoggedIn = createNativeStackNavigator();


function LoginRegisterStack() {
    return (
        <NavigationContainer>
            <StackLoggedIn.Navigator>
                <StackLoggedIn.Screen name="Login" component={Login}/>
                <StackLoggedIn.Screen name="Register" component={Register}/>
            </StackLoggedIn.Navigator>
        </NavigationContainer>
    );
}


export default LoginRegisterStack;