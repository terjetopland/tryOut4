import { StyleSheet } from "react-native";

const StandardSetupStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    restOfPage: {
        flex: 7,
    },
    gotoButton: {
        flex: 1,
        alignItems: 'flex-end'
    },
});

const classStyles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    redHintText: {
        marginTop: 40,
        color: 'red',
        fontSize: 40,
    }
});

export { StandardSetupStyle, classStyles };