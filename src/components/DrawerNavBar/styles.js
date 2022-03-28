import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'

const CustomDrawer = (props) => {
    return(
        <View style={styles.backDraw}>
            <DrawerContentScrollView {...props} contentContainerStyle={styles.scrollDraw}>
                <View style={styles.listDraw}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    backDraw: {
        flex: 1
    },
    listDraw: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 25,
    },
    scrollDraw: {
        backgroundColor: '#fff'
    }
})

export default CustomDrawer