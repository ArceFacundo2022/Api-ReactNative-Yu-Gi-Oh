import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ScaledSheet } from 'react-native-size-matters'
import {AntDesign} from '@expo/vector-icons'
import React from 'react'

const ButtonTitle = ({icon ,title, action }) => {
  return (
    <TouchableOpacity style={stylesScaled.container} onPress={action}>
     <Text style={stylesScaled.title}><AntDesign name={icon} size={24}></AntDesign>     {title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonTitle

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#7320d4',
    borderRadius: 5,
    alignItems: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: "Georgia"
  }
})

const stylesScaled = ScaledSheet.create({
  container: {
    margin: '10@s',
    padding: '10@s',
    backgroundColor: 'rgba(17, 11, 91, 0.842)',
    borderRadius: '5@s',
    alignItems: 'center'
  },
  title: {
    color: '#ffffff',
    fontSize: '16@s',
    fontFamily: "Georgia"
  }
})