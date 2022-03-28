import React from 'react'
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "../StackNavBar/home";
import HorasMaquinaStack from '../StackNavBar/horasMaquina';
import CustomDrawer from "./styles";
import Ionicons from 'react-native-vector-icons/Ionicons'
import BluetoothZebraStack from '../StackNavBar/bluetoothZebra'
import Feather from 'react-native-vector-icons/Feather'

const Drawer = createDrawerNavigator()

const RootDrawer = () => {
    return(
        <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName="HomeStack">
            <Drawer.Screen name="HomeStack" component={HomeStack} options={{
                 title: 'Início',
                 headerTintColor: '#fff',
                 headerStyle: {
                     backgroundColor: '#008b8b',
                 },
                 drawerIcon: ({color}) => (
                     <Ionicons name="home-outline" size={22} color={color} />
                 )
            }} />
            <Drawer.Screen name="LancamentoStack" component={HorasMaquinaStack} options={{
                    title: 'Horas Máquina',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#008b8b'
                    },
                    drawerIcon: ({color}) => (
                        <Ionicons name="timer-outline" size={22} color={color} />
                    )
                }} />
            <Drawer.Screen name='ZebraStack' component={BluetoothZebraStack} options={{
                    title: 'Bluetooth',
                    headerTintColor: '#fff',
                    headerStyle: {
                        backgroundColor: '#008b8b'
                    },
                    drawerIcon: ({color}) => (
                        <Feather name='bluetooth' size={22} color={color} />
                    )
                }} />
        </Drawer.Navigator>
    )
}

export default RootDrawer