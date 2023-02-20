import {ScrollView, Text} from "react-native";
import React, {useState} from "react";
import GoToButton from "./GoToButton";
import Logout from "./Logout";




const Home = () => {
    return (
        <ScrollView>
            <Text>
                Now it worked fine.
            </Text>
            <GoToButton screenName={Logout}/>
        </ScrollView>
    );
}

export default Home;