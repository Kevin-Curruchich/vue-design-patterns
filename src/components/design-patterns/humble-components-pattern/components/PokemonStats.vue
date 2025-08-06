<template>
    <div class="pokemon-stats">
      <h3>Stats</h3>
      <ul>
        <li v-for="stat in pokemonData.stats" :key="stat.stat.name">
          {{ stat.stat.name }}: {{ stat.base_stat }}
        </li>
      </ul>
    </div>

</template>

<script setup lang="ts">
import type { Pokemon } from '../interfaces/pokemon.interface';

defineProps<{
  pokemonData: Pokemon;
}>();
</script>
