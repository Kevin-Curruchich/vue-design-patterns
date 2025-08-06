<template>

    <div class="pokemon-abilities">
      <h3>Abilities</h3>
      <ul>
        <li v-for="ability in pokemonData.abilities" :key="ability.ability.name">
          {{ ability.ability.name }}
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

<style scoped>

</style>
