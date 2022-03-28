import { StyleSheet } from 'react-native';

export const stylesType = StyleSheet.create({
    input: {
        borderWidth: 2,
        width: 300,
        height: 40,
        margin: 12,
        padding: 10
    },
    container: {
        padding: 5,
        flex: 1,
        paddingLeft: 40,
        paddingTop: 0
    },
    logo: {
        alignSelf: 'center',
        marginBottom: 50,
        marginTop: 50,
        marginRight: 30
    },
    inputTitle: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 12
    },
    formContainer: {
        
    },
    buttonSubmit: {
        textAlign: 'center'
    },
    buttonLabel: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white'
    },
    buttonLinearGradient: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 8,
        marginTop: 20,
        width: 200,
        marginLeft: 60
    }
})