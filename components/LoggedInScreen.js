import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Logout from "./Logout";
import Home from "./Home";
import GetAllUiAClasses from "./GetAllUiAClasses";
import AddClass from "./AddClass";
import DeleteClassById from "./DeleteClassById";



const LoggedInTabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ClassesStack = createNativeStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name={'Home'} component={Home}/>
            <HomeStack.Screen name={'Logout'} component={Logout}/>
        </HomeStack.Navigator>
    )
}

const ClassesStackScreen = () => {
    return (
        <ClassesStack.Navigator initialRouteName={GetAllUiAClasses}>
            <ClassesStack.Screen
                name={'GetAllUiAClasses'}
                component={GetAllUiAClasses}
                options={{title: 'All UIA classes'}}
            />
            <ClassesStack.Screen
                name={'AddClass'}
                component={AddClass}
                options={{title: 'Add class'}}
            />
            <ClassesStack.Screen
                name={'DeleteClassById'}
                component={DeleteClassById}
                options={{title: 'Delete class'}}
            />

        </ClassesStack.Navigator>
    )
}


function LoggedInScreen() {
    //remember that name must match an exported component!! component is locally here
    return (
        <NavigationContainer>
            <LoggedInTabs.Navigator>
                <LoggedInTabs.Screen name={'Home stack'} component={HomeStackScreen}/>
                <LoggedInTabs.Screen name={'UiA Classes'} component={ClassesStackScreen}/>
            </LoggedInTabs.Navigator>
        </NavigationContainer>
    );
}

export default LoggedInScreen;