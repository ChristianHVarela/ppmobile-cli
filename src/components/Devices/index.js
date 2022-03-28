import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import { stylesType } from './styles'

export default function Device({data, onPress}){
    return(
        <TouchableOpacity onPress={onPress} >
            <View style={stylesType.container}>
                <View style={stylesType.formContainer}>
                    <Text>{data}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}