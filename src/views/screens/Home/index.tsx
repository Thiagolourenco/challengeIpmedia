import React from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useQuery } from '@apollo/client'
import { StackNavigationProp } from '@react-navigation/stack'

import { StackNavigatorTypes } from '../../../@types/route'
import { GET_POKEMON_TYPES } from '../../../graphql/pokemon/queries'
import { Error, Loading } from '../../components'
import styles from './styles'

type TypesNavigation = StackNavigationProp<StackNavigatorTypes, 'ListPokemons'>;

const HomeScreen = () => {
  const { data, error, loading } = useQuery(GET_POKEMON_TYPES)

  const { navigate } = useNavigation<TypesNavigation>()

  if(loading) return <Loading />

  if(error) return <Error />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual Tipo de pokemon você escolhe ? </Text>
      <FlatList 
        contentContainerStyle={{ alignSelf: "center"}}
        data={data.pokemon_v2_type}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => navigate("ListPokemons", { name: item.name })}
            activeOpacity={0.8}
          >
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        )}  
      />
    </View>
  )
}

export default HomeScreen
