import { createStackNavigator } from "@react-navigation/stack";
import React from 'react'
import BluetoothZebra from "../../pages/Bluetooth";

const Stack = createStackNavigator()

export default function BluetoothZebraStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="BluetoothZebra" component={BluetoothZebra} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    )   
};  