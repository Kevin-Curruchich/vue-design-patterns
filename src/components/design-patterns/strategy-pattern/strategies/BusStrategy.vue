<template>
  <div>
    <h3>Bus Strategy</h3>
    <p>Estimated time: {{ estimatedTime }}</p>
    <p>Cost: {{ cost }}</p>
    <p>Stops:</p>
    <div>
      <span v-for="(stop, index) in stops" :key="stop">
        {{ stop }} <span v-if="index < stops.length - 1"> -> </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<
  {
  stops: string[],
  estimatedTime: String,
  cost: String,
}
>();
</script>
