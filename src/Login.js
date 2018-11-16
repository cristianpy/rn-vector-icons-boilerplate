import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native'

import { goHome } from './navigation'
import Service from './Service';

export default class Login extends Component {
  state = {
    username: '', password: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  signIn = async () => {
    const { username, password } = this.state
    Service.setItem("USER_KEY", {username: username})
      .then((result) => {
        console.log(result);
        goHome();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Usuario'
          autoCapitalize="none"
          autoCorrect={false}
          // placeholderTextColor='white'
          onChangeText={val => this.onChangeText('username', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Clave'
          autoCapitalize="none"
          secureTextEntry={true}
          // placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <Button
          title='Entrar'
          onPress={this.signIn}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    fontSize: 18,
    fontWeight: '500',
    height: 55,
    // backgroundColor: '#42A5F5',
    margin: 10,
    // color: 'white',
    padding: 8,
    borderWidth: 1,
    borderColor: "black"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})