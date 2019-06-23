import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import LogInView from '../Components/LogInView'
import AccountView from '../Components/AccountView'
import HistoryView from '../Components/HistoryView'
import PictureView from '../Components/PictureView'
import TakePictureView from '../Components/TakePictureView';
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

const PicStack = createStackNavigator(
    {
        PictureStack:{
            screen: PictureView,
        },
        TakePicture:{
            screen: TakePictureView,
        }, 
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
        History: {
            screen: HistoryView,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    if (focused){
                        return (
                            <Image
                                source={require('../assets/historyIconActive.png')}
                                style = { styles.icon }
                            />
                        )
                    } else {
                        return (
                            <Image
                                source={require('../assets/historyIcon.png')}
                                style = { styles.icon }
                            />
                        )
                    }
                }
            }
        },
        Picture: {
            screen: PicStack,
            navigationOptions: {
                tabBarIcon: ({ focused }) => {
                    if (focused){
                        return (
                            <Image
                                source={require('../assets/pictureIconActive.png')}
                                style = { styles.icon }
                            />
                        )
                    } else {
                        return (
                            <Image
                                source={require('../assets/pictureIcon.png')}
                                style = { styles.icon }
                            />
                        )
                    }
                }
            }
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
          inactiveBackgroundColor: '#E2E6F3',
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
        Auth: AuthStack
    },
    {
      initialRouteName: 'Auth',
    }
)

export default createAppContainer(SwitchStack)