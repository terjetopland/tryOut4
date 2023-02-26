import {useNavigation, useRoute} from "@react-navigation/native";
import {Button, TouchableOpacity, StyleSheet, Text, View} from "react-native";

function GoToButton({screenName}){
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate(screenName)}
            >
                <Text>
                    {`Go to ${screenName.name}`}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default GoToButton;