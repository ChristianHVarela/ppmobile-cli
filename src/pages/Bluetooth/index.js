import React, {useState} from 'react'
import { stylesType } from './styles'
import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native'
import RNZebraBluetoothPrinter from 'react-native-zebra-bluetooth-printer'
import LinearGradient from "react-native-linear-gradient"
import Device from '../../components/Devices'

export default function BluetoothZebra(){
    const [userText1, setUserText1] = useState([])
    const [devices, setDevices] = useState([])
    const [userText3, setUserText3] = useState('BROWLIO')
    const [userPrintCount, setUserPrintCount] = useState(1)

    const zpl = "^XA ^FX Top section with logo, name and address. ^CF0,60 ^FO50,50^GB100,100,100^FS ^FO75,75^FR^GB100,100,100^FS ^FO93,93^GB40,40,40^FS ^FO220,50^FDIntershipping, Inc.^FS^CF0,30 ^FO220,115^FD1000 Shipping Lane^FS ^FO220,155^FDShelbyville TN 38102^FS ^FO220,195^FDUnited States (USA)^FS ^FO50,250^GB700,3,3^FS^FX Third section with bar code. ^BY5,2,270 ^FO100,550^BC^FD12345678^FS^XZ";

    function enableHandler(){
        RNZebraBluetoothPrinter.enableBluetooth().then((res) => {
            Alert.alert('Bluetooth ativado!')
        }).catch((error) => {
            Alert.alert(error.message)
        })
    }

    function disableHandler(){
        RNZebraBluetoothPrinter.disableBluetooth().then((res) => {
            setDevices([])
            Alert.alert('Bluetooth desativado!')
        }).catch((error) => {
            Alert.alert(error.message)
        })
    }

    function scanHandler(){
        setDevices([])
        RNZebraBluetoothPrinter.pairedDevices().then((deviceArray) => {
            console.tron.log(deviceArray)
            setDevices(deviceArray)
        }).catch((error) => {
            Alert.alert(error.message)
        })
    }

    const adrress = '00:22:58:30:52:92';

    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#008b8b','#00a86b']} style={stylesType.container}>
            <View style={stylesType.containerTopo}>
                <Text style={stylesType.title}>Se não estiver seu dispositivo aqui, por favor pareie-o!</Text>
            </View>
            <View style={stylesType.containerCabecalho}>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#008b8b','#32cd32']} style={stylesType.buttonAtivar}>
                    <TouchableOpacity onPress={() => {enableHandler()}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>ATIVAR</Text>
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#008b8b','#0074e4']} style={stylesType.buttonScan}>
                    <TouchableOpacity onPress={() => {scanHandler()}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>SCAN</Text> 
                    </TouchableOpacity>
                </LinearGradient>
                <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#e6002f','#cc003a']} style={stylesType.buttonDesativar}>
                    <TouchableOpacity onPress={() => {disableHandler()}}>
                        <Text style={{color: 'white', fontWeight: 'bold'}}>DESATIVAR</Text>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
            
            <FlatList 
            data={devices}
            renderItem={({item}) => (
                <Device data={item}/>
            )} />
        </LinearGradient>
    )
}