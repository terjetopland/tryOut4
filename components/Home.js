import {ScrollView, Text} from "react-native";
import GoToButton from "./GoToButton";
import Logout from "./Logout";
import React from "react";

const Home = () => {
    return (
        <ScrollView>
            <Text>
                Now it worked fine
            </Text>
            <GoToButton screenName={Logout}/>
        </ScrollView>
    );
}

export default Home;