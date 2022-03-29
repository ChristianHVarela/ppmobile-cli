import {StyleSheet} from 'react-native'

export const stylesType = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    title: {
        alignItems: 'flex-start',
        margin: 13,
        fontWeight: 'bold',
        color: 'black'
    },
    buttonPrinter: {

    },
    buttonTitle: {
        
    },
    containerCabecalho: {
        backgroundColor: 'white',
        width: 340,
        height: 90,
        borderRadius: 7,
        flexDirection: 'row',
        margin: 10,

    },
    buttonAtivar: {
        height: 30,
        margin: 25,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
    },
    buttonDesativar: {
        height: 30,
        margin: 25,
        width: 85,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    buttonScan: {
        height: 30,
        margin: 25,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    containerTopo: {
        backgroundColor: 'white',
        width: 340,
        height: 70,
        borderRadius: 7,
        flexDirection: 'row',
        margin: 10,
    }
})