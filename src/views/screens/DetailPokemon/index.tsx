import React from 'react'
import { Text, View } from 'react-native'
import { SvgUri } from 'react-native-svg'
import { useQuery } from '@apollo/client'
import { RouteProp, useRoute } from '@react-navigation/native'

import { DETAIL_POKEMON } from '../../../graphql/pokemon/queries'
import { StackNavigatorTypes } from '../../../@types/route'
import { Loading, Error } from '../../components'
import styles from './styles'

type RouteParams = RouteProp<StackNavigatorTypes, "DetailPokemon">

const DetailPokemon = () => {
  const { params } = useRoute<RouteParams>()
  
  const { data, error, loading} = useQuery(DETAIL_POKEMON, {
    variables: {
      id: params.id 
    }
  })

  if(loading) return <Loading />

  if(error) return <Error />
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data?.pokemon_v2_pokemon[0]?.pokemon_v2_pokemonforms[0].name}</Text>
      <SvgUri 
        uri={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data?.pokemon_v2_pokemon[0].id}.svg`}
        height={300}
        width={300}
        style={styles.image}
      />

      <Text style={styles.description}> 
        Meu principal pokemon: {data?.pokemon_v2_pokemon[0]?.pokemon_v2_pokemonforms[0].is_default ? "SIM" : "NÃO"}
      </Text>
      <Text style={styles.description}>
        Pronto para batalha: {data?.pokemon_v2_pokemon[0]?.pokemon_v2_pokemonforms[0].is_battle_only ? "SIM" : "NÃO"}
      </Text>
    </View>
  )
}

export default DetailPokemon
