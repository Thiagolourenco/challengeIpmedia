import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from '@expo/vector-icons/MaterialIcons'

import { HomeScreen, ProfileScreen} from '../screens'
import StackNavigator from './StackNavigator'

const TabNavigator = createBottomTabNavigator()

export default () => {
  return (
    <TabNavigator.Navigator initialRouteName='StackNavigator'>
      <TabNavigator.Screen 
        name='StackNavigator' 
        component={StackNavigator} 
        options={{ 
          headerShown: false,
          tabBarIcon: () => <Icon name="home" size={32} color="#212121" />,
          tabBarLabel: "Inicio"

        }}

      />
      <TabNavigator.Screen 
        name='ProfileScreen' 
        component={ProfileScreen} 
        options={{
          headerTitle: "Perfil",
          tabBarIcon: () => <Icon name="person" size={32} color="#212121" />,
          tabBarLabel: "Perfil"
        }}
      />
    </TabNavigator.Navigator>
  )
}