import {ScrollView, SafeAreaView, Text, TextInput, StyleSheet, Button, View} from "react-native";
import React, {useState} from "react";
import GoToButton from "./GoToButton";
import Logout from "./Logout";





const Home = () => {
    const [message, setMessage] = useState('');


    return (
        <View style={styles.container}>
            <View style={{flex: 1}}>
                <Text>
                    Now it worked fine.
                </Text>
            </View>
            <View style={{flex: 1}}>
                <TextInput
                    placeholder={'Write your message here'}
                    value={message}
                    style={styles.inputField}
                    onChangeText={setMessage}/>
                <Button
                    title={'Refresh message'}
                    onPress={() => setMessage('')}
                />
            </View>
            <View style={{flex: 5}}>
               <Text style={styles.message}>
                    {message}
                </Text>
            </View>
            <View style={{flex: 1}}>
                <GoToButton screenName={Logout}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    inputField: {
        fontSize: 20,
        backgroundColor: 'rgba(220, 220, 170, 0.4)'
    },
    message: {
        top: 10,
        fontSize: 200,
        backgroundColor: 'rgba(220, 220, 170, 0.4)',
        color: 'green'
    }
});
export default Home;