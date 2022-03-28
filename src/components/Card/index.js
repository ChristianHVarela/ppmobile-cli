import React from "react";
import {View} from 'react-native'
import { stylesType } from "./styles";

export default function Card(props){
    return(
        <View style={stylesType.card}>
            <View style={stylesType.content}>
                {props.children}
            </View>
        </View>
    )
}