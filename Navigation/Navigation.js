import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import LogInView from '../Components/LogInView'
import AccountView from '../Components/AccountView'


const AuthStack = createStackNavigator(
    {
        LogIn: {
            screen: LogInView
        }
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)

const AppStack = createBottomTabNavigator(
    {
        LogIn: {
        screen: LogInView
        },
        Account: {
            screen: AccountView,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    if (focused){
                        return (
                            <Image
                                source={require('../assets/accountIconActive.png')}
                                style = { styles.icon }
                            />
                        )
                    } else {
                        return (
                            <Image
                                source={require('../assets/accountIcon.png')}
                                style = { styles.icon }
                            />
                        )
                    }
                }
            }
        }
    },
    {
        tabBarOptions: {
          activeBackgroundColor: '#C5C9DA', // Couleur d'arrière-plan de l'onglet sélectionné
          inactiveBackgroundColor: '#d8ddef',
          showLabel: false, // On masque les titres
          showIcon: true
        }
      }
)

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30
    }
})
  
const SwitchStack = createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
)

export default createAppContainer(SwitchStack)