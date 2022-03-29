import React, {useState, useEffect} from 'react'
import LinearGradient from "react-native-linear-gradient"
import {FlatList, Alert} from 'react-native'
import { stylesType } from './styles'
import Horas from '../../components/HorasMaquina'
import RNZebraBluetoothPrinter from 'react-native-zebra-bluetooth-printer'
import { set } from 'react-native-reanimated'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
    const [parte1, setParte1] = useState('^XA^FX CABEÇALHO ate a primeira linha horizontal^FX Informacoes do cedente^CF0,50^FO50,50^FDPrefeitura Municipal de Xanxere^FS^CF0,30^FO50,115^FD73.696.957/0001-98^FS^FO50,155^FDR. Jose de Miranda Ramos, ^FS^FO50,195^FD455, Centro^FS^FO50,250^GB700,3,3^FS^FX ENTRE a primeira e segunda linha horizontal^FX Informaçoes do Sacado^CFA,30^FO50,300^FD')
    const [parte2, setParte2] = useState('^FS^FO50,340^FD694.341.160-82^FS^FO50,380^FDR. Severino Jucatigre, 254^FS^FO50,420^FDBairro Jorge Bico, Rolandia PR^FS^FO50,500^GB700,3,3^FS^FX Quadrado Grande^FO50,550^GB700,350,3^FS^FX quadrado data^FO70,580^GB300,80,3^FS^FX quadrado valor^FO430,580^GB300,80,3^FS^CFA,20^FO90,590^FDData de vencimento^FS^FO450,590^FDValor^FS^CFA,30^FO100,620^FD')
    const [parte3, setParte3] = useState('^FS^FO460,620^FDR$ ')
    const [parte4, setParte4] = useState('^FS^FX Quadrado dos servicos  ^FO70,680^GB660,200,3^FS  ^CFA,20 ^FO90,700^FDServico^FS ^FO470,700^FDQuantidade^FS  ^FO610,700^FDValor^FS ^FX CODIGO DE BARRAS ^FX nao sei como limitar o tamanho do codigo de barras  ^BY5,2,200 ^FO60,910^BCn,150^FD123456789^FS^CFA,20  ^FO90,1120^FDTalvez outros dados do savado^FS ^FO90,1140^FDNao sei quais dados sao obrigatorios nesse tipo deguia^FS ^FO470,1160^FDAutenticacao mecanica^FS ^FO90,720^FDMeMamar^FS ^FO470,720^FDInfinito^FS ^FO610,720^FDNao ^FS^XZ')
    const [boleto, setBoleto] = useState('')
    const [zpl, setZpl] = useState()
    const [printer, setPrinter] = useState()


    const handlerDevice = (data) => {
        const totale = data.valor * data.quantidade
        setZpl(parte1.concat(data.produtor, parte2).concat(data.data, parte3).concat(totale.toString(), parte4))
        RNZebraBluetoothPrinter.isEnabledBluetooth().then((response) => {
            RNZebraBluetoothPrinter.enableBluetooth().then((res) => {
                if(res){
                    getPrinter()
                    if(printer){
                        printerHandler(printer)
                    } else {
                        Alert.alert('Ligue o Bluetooth da sua impressora ou escolha uma impressora válida!')
                    }
                }
            }).catch((error) => {
                Alert.alert(error.message)
            })
        }).catch((error) => {
            Alert.alert(error.message)
        })
    }

    const getPrinter = async () => {
        const address = await AsyncStorage.getItem('printer')
        if(address){
            setPrinter(address)
        }
    }

    const printerHandler = () => {
        getPrinter()
        RNZebraBluetoothPrinter.print(printer,zpl).then((res) => {
            Alert.alert('Boleto enviado.')
        }).catch((error) => {
            Alert.alert('Ligue o Bluetooth da sua impressora ou escolha uma impressora válida!')
        })
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
