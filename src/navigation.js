import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      options: {
        bottomTabs: {
          titleDisplayMode: 'alwaysShow',
          iconInsets: { top: 5, bottom: -5, }
          // currentTabIndex: 1,
        },
      },
      children: [
        {
          component: {
            name: 'Login',
            options: {
              bottomTab: {
                text: 'Login',
                alignment: 'center',
                icon: require('./login.png'),
                iconInsets: { top: 5, bottom: -5, }
              }
            }
          },
        },
        {
          component: {
            name: 'Registro',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Registro',
                alignment: 'center',
                icon: require('./registro.png'),
              },
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
            options: {
              topBar: {
                title: { 
                  text: 'Home', 
                  alignment: 'center' 
                },
              },
            },
          }
        },
      ],
    }
  }
})