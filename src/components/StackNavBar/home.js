import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../../pages/Home";
import Signin from '../../pages/Login';

const Stack = createStackNavigator()

export default function HomeStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Home} options={{
                headerShown: false
            }}/>
            <Stack.Screen name='Login' component={Signin} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}