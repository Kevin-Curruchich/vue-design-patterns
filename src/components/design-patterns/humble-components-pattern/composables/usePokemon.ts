import { ref } from "vue"

import type { Pokemon } from "../interfaces/pokemon.interface"

import { pokemonApi } from "@/axios/pokeApi"



export const usePokemon = ()=> {

    const pokemonData = ref<Pokemon | null>(null)
    const isLoadingPokemonData = ref(false)

    const getPokemon = async (num: number = 0): void => {

        let pokemonNumber = num

        if(!num){
            pokemonNumber = Math.floor(Math.random() * 151) + 1
        }

        isLoadingPokemonData.value = true

        const response = await pokemonApi<Pokemon>(`/${pokemonNumber}`)

        pokemonData.value = response.data

        isLoadingPokemonData.value = false

    }


    return {
        pokemonData,
        getPokemon,
        isLoadingPokemonData
    }
}