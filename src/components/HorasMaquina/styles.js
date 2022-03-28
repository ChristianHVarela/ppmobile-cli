import { StyleSheet } from "react-native";

export const stylesType = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: 'white',
        margin: 20,
        width: 350,
        height: 130,
        flexDirection: 'row',
    },
    title: {
        alignItems: 'flex-start',
        marginLeft: 12,
        marginTop: 5
    },
    buttonView: {
        padding: 10,
        alignItems: 'flex-start',
        marginTop: 4,
        marginLeft: 30
    },
    formContainer: {
        width: 270
    }
})