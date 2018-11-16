import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'Login',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Login',
                icon: require('./login.png')
              }
            }
          },
        },
        {
          component: {
            name: 'Registro',
            options: {
              bottomTab: {
                text: 'Registro',
                fontSize: 12,
                icon: require('./registro.png')
              }
            }
          },
        },
      ],
    }
  }
});

export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'Home',
          }
        }
    ],
    }
  }
})