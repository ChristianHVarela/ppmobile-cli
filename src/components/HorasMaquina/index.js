import React from 'react'
import { View, Text, TouchableOpacity } from "react-native"
import { stylesType } from './styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Horas({data, onPress}){
    return(
        <TouchableOpacity onPress={onPress} >
            <View style={stylesType.container}>
                <View style={stylesType.formContainer}>
                    <Text style={stylesType.title}>Produtor: {data.produtor}</Text>
                    <Text style={stylesType.title}>Tipo do Serviço: {data.servico}</Text>
                    <Text style={stylesType.title}>Quantidade: {data.quantidade} Horas</Text>
                    <Text style={stylesType.title}>Valor: {data.valor} Reais            Data: {data.data}</Text>
                    <Text style={stylesType.title}>Valor Total: {data.valor * data.quantidade} Reais</Text>
                </View>
                <View style={stylesType.buttonView}>
                    <MaterialCommunityIcons name="download" size={30} />
                </View>
            </View>
        </TouchableOpacity>
    );
}