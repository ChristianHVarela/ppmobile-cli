import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import { View, Text, TouchableOpacity, Alert } from "react-native"
import { stylesType } from './styles'

export default function Device({data}){

    const savePrinterHandler = async (data) => {
        if(data.class === 1664 || data.class === 1536){
            try{
                await AsyncStorage.setItem('printer', data.address)
            } catch (error) {
                console.tron.log(error.message)
            }
            let address = await AsyncStorage.getItem('printer')
            console.tron.log(address)
            if(address){
                Alert.alert('Impressora definida.')
            }
        } else {
            Alert.alert('Escolha uma impressora válida')
        }
    }




    return(
        <TouchableOpacity onPress={() => {savePrinterHandler(data)}}>
            <View style={stylesType.container}>
                <View style={stylesType.formContainer}>
                    <Text style={stylesType.title}>{data.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}