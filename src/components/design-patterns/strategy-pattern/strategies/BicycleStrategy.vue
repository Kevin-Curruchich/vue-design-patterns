<template>
  <div>
    <h3>Bicycle Strategy</h3>
    <p>Estimated time: {{ estimatedTime }}</p>
    <p>Cost: {{ cost }}</p>
    <p>Stops:</p>
    <ol>
      <li v-for="{ name, timeInStop } in stops" :key="name">
        {{ name }} - Estimated Time: {{ timeInStop }}
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
defineProps<
  {
  stops: {name: string, timeInStop: number}[],
  estimatedTime: String,
  cost: String,
}
>();
</script>
