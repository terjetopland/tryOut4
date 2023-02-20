import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Logout from "./Logout";
import Home from "./Home";

const StackLoggedIn = createNativeStackNavigator();

function HomeStack() {
    return (
        <NavigationContainer>
            <StackLoggedIn.Navigator>
                <StackLoggedIn.Screen name="Home" component={Home}/>
                <StackLoggedIn.Screen name="Logout" component={Logout}/>
            </StackLoggedIn.Navigator>
        </NavigationContainer>
    );
}


export default HomeStack;