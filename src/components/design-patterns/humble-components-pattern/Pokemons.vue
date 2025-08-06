<template>
    <div
        v-if="!pokemonList.length || isLoadingPokemonList"
    >
        Loading...
    </div>

    <div
        v-else-if="!pokemonSelected && pokemonList.length"
    >
        <div
            v-for="poke in pokemonList"
        >
            <Pokemon
            :key="poke.name"
            :pokemonId="poke.url.split('/')[6]"
            @select-pokemon="onSelectPokemon"
            />
        </div>
    </div>

    <div
        v-if="pokemonSelected"
    >
        <div
            style="text-align: center;"
        >
                Pokemon Selected {{pokemonSelected.name}}
        </div>
    </div>

</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import Pokemon from './components/Pokemon.vue'
import usePokemons from './composables/usePokemons';
import type { Pokemon as PokemonData } from './interfaces/pokemon.interface';

const {isLoadingPokemonList, pokemonList} = usePokemons()

const pokemonSelected = ref<PokemonData | null>(null)

const onSelectPokemon = (pokemonData: Ref<PokemonData>)=>{

    console.log(pokemonData)

    pokemonSelected.value = pokemonData.value
}

</script>