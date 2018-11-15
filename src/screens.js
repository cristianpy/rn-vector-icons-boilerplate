import {Navigation} from 'react-native-navigation';

import Inicializando from './Inicializando';
import Login from './Login';
import Home from './Home';
import Registro from './Registro';
import Screen2 from './Screen2';

export function registerScreens() {
  Navigation.registerComponent('Inicializando', () => Inicializando);
  Navigation.registerComponent('Login', () => Login);
  Navigation.registerComponent('Home', () => Home);
  Navigation.registerComponent('Registro', () => Registro);
  Navigation.registerComponent('Screen2', () => Screen2);
}