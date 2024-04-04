import { gql } from "@apollo/client";

export const GET_POKEMON_TYPES = gql`
  query GetTypes {
    pokemon_v2_type {
      id
      name
    }
  }
`;

export const TYPE_POKEMON = gql`
  query GetPokemonsType($typeName: String!) {
    pokemon_v2_pokemontype(where: {pokemon_v2_type: {name: {_eq: $typeName}}}) {
      pokemon_id
      id
      pokemon_v2_pokemon {
        name
        id
        pokemon_species_id
        order
      }
    }
  }
`;

export const DETAIL_POKEMON = gql`
  query PokemonDetails($id: Int!) {
    pokemon_v2_pokemon(where: {id: {_eq: $id}}) {
      id
      pokemon_v2_pokemonforms {
        name
        is_default
        is_battle_only
        id
      }
    }
  }
`;