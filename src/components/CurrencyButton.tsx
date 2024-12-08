import React from 'react'
import type { PropsWithChildren } from 'react'

import {View, Text, StyleSheet} from 'react-native'

type CurrencyButtonProps = PropsWithChildren<{
    name: string;
    flag: string;
}>
const currencyButton = (props:CurrencyButtonProps):JSX.Element =>{
return(
    <View style={styles.buttonContainer}>
        <Text style={styles.flag}>{props.flag}</Text>
        <Text style={styles.country}>{props.name}</Text>
    </View>
)

}
const styles = StyleSheet.create({
        buttonContainer:{
            alignItems:'center'
        },
        flag:{
            fontSize: 24,
            color:'#FFFFFF',
            marginBottom:4
        },
        country:{
            fontSize:14,
            color:'#2d3456',
        }
})
export default currencyButton