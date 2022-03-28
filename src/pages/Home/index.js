import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import Card from "../../components/Card"
import LinearGradient from "react-native-linear-gradient";
import { stylesType } from "./styles";

export default function Home ({navigation}){

    const pressHandler = () => {
        console.tron.log('olar')
        navigation.navigate('Login')
    }


    return(
        <View style={stylesType.container}>
            <Card>
                <Text style={stylesType.label}>Olá, seja bem vindo!</Text>
                <Text style={stylesType.label2}>Faça o login e baixe seus arquivos.</Text>
            </Card>

            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#008b8b','#00a86b']} style={stylesType.buttonLinearGradient}>
                <TouchableOpacity style={stylesType.buttonSubmit} >
                    <Text style={stylesType.buttonLabel} onPress={() => {pressHandler()}}>Logar</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>

    )
}
