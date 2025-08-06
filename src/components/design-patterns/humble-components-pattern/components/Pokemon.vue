<template>
  <div class="pokemon-card" v-if="!isLoadingPokemonData && pokemonData">
    <PokemonProfile
      :pokemonData="pokemonData"
    />
    <PokemonStats
      :pokemonData="pokemonData"
    />
    <PokemonAbilities 
      :pokemonData="pokemonData"
    />
    <button
        @click="onSelectPokemon"
    >
        Select Pokemon
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import {usePokemon} from '../composables/usePokemon'

import PokemonProfile from './PokemonProfile.vue';
import PokemonStats from './PokemonStats.vue';
import PokemonAbilities from './PokemonAbilities.vue';

const props = defineProps<{
  pokemonId: string
}>();

const emit = defineEmits(['select-pokemon']);

const {pokemonData, getPokemon, isLoadingPokemonData} = usePokemon()

const onSelectPokemon = () => {
  emit('select-pokemon', pokemonData);
};

onMounted(()=>{
   getPokemon(Number(props.pokemonId))
})

</script>

<style scoped>
.pokemon-card {
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  text-align: center;
}
</style>
