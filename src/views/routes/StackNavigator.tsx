import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListPokemons, HomeScreen, DetailPokemon} from '../screens'
import { StackNavigatorTypes } from '../../@types/route'

const StackNavigator = createStackNavigator<StackNavigatorTypes>()

export default () => {
  return (
    <StackNavigator.Navigator initialRouteName='HomeScreen'>
      <StackNavigator.Screen 
        name="HomeScreen" 
        component={HomeScreen} 
        options={{ 
          headerTitle: "Home"
        }}
      />
      <StackNavigator.Screen 
        name='ListPokemons' 
        component={ListPokemons} 
        options={{ 
          headerTitle: "Lista de Pokemons",
          headerBackTitle: "Voltar"
        }}
      />
      <StackNavigator.Screen 
        name="DetailPokemon" 
        component={DetailPokemon}
        options={{ 
          headerTitle: "Detalhes do Pokemon",
          headerBackTitle: "Voltar"
        }}
       />
    </StackNavigator.Navigator>
  )
}