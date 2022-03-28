import React, {useState} from 'react'
import { stylesType } from './styles'
import { View, Text, TouchableOpacity, Alert, FlatList } from 'react-native'
import RNZebraBluetoothPrinter from 'react-native-zebra-bluetooth-printer'
import LinearGradient from "react-native-linear-gradient"
import Device from '../../components/Devices'

export default function BluetoothZebra(){
    const [userText1, setUserText1] = useState([])
    const [devices, setDevices] = useState({})
    const [userText3, setUserText3] = useState('BROWLIO')
    const [userPrintCount, setUserPrintCount] = useState(1)

    const zpl = "^XA ^FX Top section with logo, name and address. ^CF0,60 ^FO50,50^GB100,100,100^FS ^FO75,75^FR^GB100,100,100^FS ^FO93,93^GB40,40,40^FS ^FO220,50^FDIntershipping, Inc.^FS^CF0,30 ^FO220,115^FD1000 Shipping Lane^FS ^FO220,155^FDShelbyville TN 38102^FS ^FO220,195^FDUnited States (USA)^FS ^FO50,250^GB700,3,3^FS^FX Third section with bar code. ^BY5,2,270 ^FO100,550^BC^FD12345678^FS^XZ";

    function pressHandler(){
        RNZebraBluetoothPrinter.print(adrress, zpl).then((deviceArray) => {
            console.tron.log(deviceArray)
        }).catch((error) => {
            Alert.alert(error.message)
        })
    }

    const adrress = '00:22:58:30:52:92';

    return(
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 1}} colors={['#008b8b','#00a86b']} style={stylesType.container}>
            <Text style={stylesType.title}>
            </Text>
            
            <TouchableOpacity style={stylesType.buttonPrinter} onPress={() => {pressHandler()}}>
                <Text style={stylesType.buttonTitle}>BUTTON</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}