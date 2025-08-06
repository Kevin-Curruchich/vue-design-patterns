<template>
  <div>
    <img :src="pokemonData.sprites.front_default" :alt="pokemonData.name" />
    <h2 class="pokemon-name">{{ pokemonData.name }}</h2>
    <div class="pokemon-details">
      <p><strong>Height:</strong> {{ pokemonData.height }}</p>
      <p><strong>Weight:</strong> {{ pokemonData.weight }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces/pokemon.interface';

defineProps<{
  pokemonData: Pokemon;
}>();

</script>
