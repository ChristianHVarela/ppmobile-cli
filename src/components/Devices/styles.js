import { StyleSheet } from "react-native";

export const stylesType = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 340,
        height: 35,
        borderRadius: 7,
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',
    },
    title: {
        alignItems: 'flex-start',
        marginLeft: 70,
        color: 'black'
    },
    buttonView: {
        padding: 10,
        alignItems: 'flex-start',
        marginTop: 4,
        marginLeft: 30
    },
    formContainer: {
        width: 270,
        alignItems: 'center',
        justifyContent: "center"
    }
})