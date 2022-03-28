import { StyleSheet } from 'react-native'

export const stylesType = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        shadowColor: '#333',
        borderRadius: 7,
        elevation: 3,
        shadowOffset: {width: 10, height: 10 },
        marginHorizontal: 4,
        marginVertical: 6,
        shadowOpacity: 0.3,
        shadowRadius: 2,
        height: 100,
    },
    content: {
        marginHorizontal: 10,
        marginVertical: 5,
        marginTop: 20,
    }
})