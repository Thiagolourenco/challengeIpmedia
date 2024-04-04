import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { FlatList } from 'react-native-gesture-handler'
import { useQuery } from '@apollo/client'

import { StackNavigatorTypes } from '../../../@types/route'
import { TYPE_POKEMON } from '../../../graphql/pokemon/queries'
import styles from './styles'
import { Loading, Error } from '../../components'

type TypesNavigation = StackNavigationProp<StackNavigatorTypes, 'DetailPokemon'>;
type RouteParams = RouteProp<StackNavigatorTypes, "ListPokemons">

const ListPokemons = () => {
  const { navigate } = useNavigation<TypesNavigation>()
  const route = useRoute<RouteParams>()

  const { data, error, loading} = useQuery(TYPE_POKEMON, {
    variables: { typeName: route?.params?.name}
  })

  if(loading) return <Loading />

  if(error) return <Error />

  return (
    <View>
      <FlatList 
        data={data?.pokemon_v2_pokemontype}
        renderItem={({item}) => {
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.pokemon_v2_pokemon.id}.svg`

          return (
            <TouchableOpacity 
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => navigate("DetailPokemon", { id: item.pokemon_v2_pokemon.id })}
            >
              <Text style={styles.cardText}>{item.pokemon_v2_pokemon.name}</Text>
              {image && (
                <SvgUri 
                  uri={image}
                  height={100}
                  width={100}
                />
              )}
           
            </TouchableOpacity>
          )
        }}
       />
    </View>
  )
}

export default ListPokemons

