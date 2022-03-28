import React, { useState } from 'react'
import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput, Image, Text, TouchableOpacity, Alert } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import logoFaee from '../../assets/logo-faee.png'
import { TextInputMask } from 'react-native-masked-text'
import { stylesType } from './styles';

export default function Signin({ navigation }){
    const [cnpj, setcnpj] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = () => {
        console.log(cnpj, username, password);
        if(!username || !password){
            if(!username){
                Alert.alert('Digite um usuário valído!')
            }
            if(!password){
                Alert.alert('Digite uma senha valída!')
            }
        } else {
            navigation.navigate('Inicio')
        }
    }


    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{flex: 1}}>
                <View style={stylesType.container}>
                    <Image source={logoFaee} style={stylesType.logo} />
                    <View style={stylesType.formContainer}>
                        <Text style={stylesType.inputTitle}>Chave de acesso:</Text>
                        <TextInputMask  style={stylesType.input}
                            type={'cnpj'}
                            placeholder="Digite seu CNPJ ..."
                            value={cnpj}
                            onChangeText={text => setcnpj(text)}
                            />
                        <Text style={stylesType.inputTitle}>Usuário:</Text>
                        <TextInput  style={stylesType.input}
                            placeholder="Digite seu usuário ..."
                            autoCorrect={false}
                            value={username}
                            returnKeyType="next"
                            onChangeText={text => setUsername(text)}/>
                        <Text style={stylesType.inputTitle}>Senha:</Text>
                        <TextInput  style={stylesType.input}
                            placeholder="Digite sua senha ..."
                            autoCorrect={false}
                            onChangeText={text => setPassword(text)}
                            value={password}
                            secureTextEntry />
                        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#008b8b','#6E87FD']} style={stylesType.buttonLinearGradient}>
                            <TouchableOpacity style={stylesType.buttonSubmit} onPress={submitHandler}>
                                <Text style={stylesType.buttonLabel}>Entrar</Text>
                            </TouchableOpacity>
                        </LinearGradient>
                        
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}