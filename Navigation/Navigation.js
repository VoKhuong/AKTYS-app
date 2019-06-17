import React from 'react'
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation'
import LogInView from '../Components/LogInView'


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

const AppStack = createBottomTabNavigator({
    LogIn: {
      screen: LogInView
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