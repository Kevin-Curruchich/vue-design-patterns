import { onMounted, ref } from "vue"
import { pokemonApi } from "@/axios/pokeApi";

import type { PokemonList } from "../interfaces/pokemon.interface";


export default ()=>{

    const isLoadingPokemonList = ref(true)
    const pokemonList = ref<PokemonList[]>([])

    const getPokemonList = async ()=> {
        const response = await pokemonApi<{results: PokemonList[]}>('/?limit=3');
        pokemonList.value = response.data.results;
    }
    

    onMounted(async ()=>{

        await getPokemonList()

        isLoadingPokemonList.value = false
    })

    return {
        isLoadingPokemonList,
        pokemonList
    }
}