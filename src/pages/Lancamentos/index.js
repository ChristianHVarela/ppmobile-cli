import React, {useState} from 'react'
import LinearGradient from "react-native-linear-gradient"
import {FlatList, Alert} from 'react-native'
import { stylesType } from './styles'
import Horas from '../../components/HorasMaquina'

export default function HorasMaquina(){
    const [horas, setHoras] = useState([
        {id: 1, produtor: 'Janete Aparecida de Arruda', servico: 'Patrola', quantidade: 3, valor: 200.00, data: '31/11/2021'},
        {id: 2, produtor: 'João Pedro Faria', servico: 'Vacina Tuberculose', quantidade: 5, valor: 300.00, data: '15/11/2021'},
        {id: 3, produtor: 'Adir Antônio Berto', servico: 'Rolo Compressor', quantidade: 2, valor: 350.00, data: '31/10/2021'},
        {id: 4, produtor: 'Ademir Biasoli', servico: 'Patrola', quantidade: 3, valor: 200.00, data: '23/10/2021'},
        {id: 5, produtor: 'Alexandre Wustru', servico: 'Vacina Tuberculose', quantidade: 1, valor: 300.00, data: '11/11/2021'},
        {id: 6, produtor: 'Francisco Elautério de Oliveira', servico: 'Vacina Tuberculose', quantidade: 5, valor: 300.00, data: '19/6/2021'},
        {id: 7, produtor: 'Cleiton Guisso', servico: 'Rolo Compressor', quantidade: 6, valor: 350.00, data: '21/11/2021'},
        {id: 8, produtor: 'Ivana Mara Danieli Westerich', servico: 'Patrola', quantidade: 7, valor: 200.00, data: '30/11/2021'},
        {id: 9, produtor: 'Ademir Biasoli', servico: 'Patrola', quantidade: 9, valor: 200.00, data: '11/6/2021'},
        {id: 10, produtor: 'Cooperativa Agroindustria Alfa', servico: 'Escavadeira Hidráulica', quantidade: 6, valor: 280.00, data: '11/6/2021'},
        {id: 11, produtor: 'Francisco Elautério de Oliveira', servico: 'Escavadeira Hidráulica', quantidade: 8, valor: 280.00, data: '11/11/2021'},
        {id: 12, produtor: 'Paulo Cezar da Silva', servico: 'Construção Civil', quantidade: 5, valor: 100.00, data: '11/11/2021'},
        {id: 13, produtor: 'Séria Zancanaro', servico: 'Construção Civil', quantidade: 5, valor: 100.00, data: '11/2/2021'},
        {id: 14, produtor: 'Wolni Pedro Giraldi', servico: 'Patrola', quantidade: 4, valor: 200.00, data: '11/10/2021'},
        {id: 15, produtor: 'Cooperativa Agroindustria Alfa', servico: 'Construção Civil', quantidade: 1, valor: 100.00, data: '11/6/2021'},
    ])

    
    
    const handlerDevice = (data) => {
        Alert.alert('Por Favor! Configurar impressora.')
    }

    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#008b8b','#00a86b']} style={stylesType.container}>
            <FlatList 
            data={horas}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => String(item.id)}
            renderItem={({item}) => (
                <Horas data={item} onPress={() => {handlerDevice(item)}} />
            )} />
        </LinearGradient>
    )
}
