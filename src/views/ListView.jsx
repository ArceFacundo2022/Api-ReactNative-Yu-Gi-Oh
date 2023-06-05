import { Image, ImageBackground, FlatList, StyleSheet, Text, View } from 'react-native'
import { Searchbar } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect} from 'react';
import ButtonTitle from '../components/ButtonTitle'
import React from 'react'
import {Delete} from '@expo/vector-icons'

const ListView = () => {

    const [respuesta, setRespuesta] = useState([])
    const [totalCards, setTotalCards] = useState(260)
    const [searchQuery, setSearchQuery] = useState([]);

    useEffect(() => {

        execute()
      }, [])

    const execute = async () => {
        const json = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?level=4&attribute=water&sort=atk')
        if (!json.ok){
            return alert(`Error al hacer la peticion`);
        }
        const data = await json.json()
        setRespuesta(data.data)
    }

    const onChangeSearch = (query) => {
        const array = respuesta.filter((elemento) =>{
        if(elemento.name.toLowerCase().includes(query.toLowerCase())){
            elemento.search = true
            return elemento
        }else{
            elemento.search = false
            return elemento
        }
        })
        setSearchQuery(array)
    }

    const renderItem = ({ item, index }) => {
        if (!item.hidden && item.search){
            return (
                <ImageBackground source={require('../../assets/FondoAzulOscuro.jpg')} style={{ width: '100%', height: '100%' }}>
                    <View style={{ width: '100%', height: '88%' }}>
                        <View style={{ width: '100%', height: '100%' }}>
                            <Image resizeMode='contain' style={styles.image} source={{ uri: item.card_images[0].image_url}}/>
                        </View>
                        <ButtonTitle icon={"delete"} title={item.name} action={() => {
                            const refresh = respuesta
                            refresh[index].hidden = true
                            setRespuesta(refresh)
                            setTotalCards(totalCards - 1)
                        }} />
                    </View>
                </ImageBackground>
            )
        }else {
            return(<></>)
        }}
    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Busqueda de Cartas"
                onChangeText={onChangeSearch}
            />
            <View style={styles.body}>
                <FlatList data={searchQuery} renderItem={renderItem} />
            </View>
            <View style={styles.footer}><Text style={styles.texto}> hay {totalCards} cartas en la baraja </Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      /// flexDirection nos permite especificar de que manera se acomodaran los elementos
      // flexDirection: 'row'
    },
    header: {
        flex: 1,
        backgroundColor: "rgba(17, 11, 91, 0.842)",
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    body: {
      flex: 1,
      // flexGrow nos permite especificar la importancia o tamaño que tendra el elemento en el contenedor
        flexGrow: 10,
        flexDirection: 'row',
        backgroundColor: "black"
    },
    footer: {
      flex: 1,
      backgroundColor: "rgba(17, 11, 91, 0.842)",
      textAlign: 'center',
      textAlignVertical: 'center'
    },
    texto: {
      fontSize: 26,
      height: '100%',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontWeight: "bold",
      color : "white",
      fontFamily: "Georgia",
      textShadow: "-1px -1px 1px #aaa"
    },
    image:{
        width:'100%',
        height: '60vh',
    },
    containerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }
  })

  export default ListView