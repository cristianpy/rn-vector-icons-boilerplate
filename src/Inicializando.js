import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import { goToAuth, goHome } from './navigation';
import Service from './Service';

export default class Inicializando extends Component {
  componentDidMount() {
    Service.getItem("USER_KEY")
      .then((result) => {
        console.log("USER_KEY:");
        console.log(result);
        if (result) {
          goHome();
        } else {
          goToAuth();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.bienvenida}>Cargando</Text>
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
  bienvenida: {
    fontSize: 28
  },
})
