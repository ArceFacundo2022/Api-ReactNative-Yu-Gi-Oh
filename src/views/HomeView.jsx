import { FlatList, View, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import ButtonTitle from '../components/ButtonTitle'

const HomeView = ({ navigation }) => {
  const views = [
    { title: 'Lista', path: 'list' }
  ]

  const renderItem = ({ item }) => <ButtonTitle icon={"menuunfold"} title={item.title} action={() => navigation.navigate(item.path)} />

  return (
    <ImageBackground source={require('../../assets/FondoFuegoAzul.jpg')} style={{width: '100%', height: '100%'}}>
      <View>
        <View style={styles.viewImg}>
          <Image style={styles.img2} source={require('../../assets/descarga.png')}/>
          <Image style={styles.img} source={require('../../assets/DragonBlancoOjosAzules.png')}/>
        </View>
        <View>
          <FlatList data={views} renderItem={renderItem} />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  img: {
    width: "95%",
    height: "40vh",
    margin:5,
    position:'relative',
  },
  img2: {
    width: "95%",
    height: "16vh",
    margin: 10,
    position:'relative',
  },
  viewImg: {
    flex:1,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginButton: 40
  },
  body: {
    flex:1,
    backgroundColor: "rgb(106, 18, 126)",
    textAlign: 'center',
    textAlignVertical: 'center'
  }
})

export default HomeView