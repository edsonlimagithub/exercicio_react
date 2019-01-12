import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter } from './componentes/Multi'

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Simples texto='Flexivel!!!!'/>
        <ParImpar numero={31}/>
        <Inverter texto='React Nativo' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f20: {
    fontSize: 40
  }
})