<template>
  <div>
    <h3>Cab Strategy</h3>
    <p
      data-test-id="estimated-time"
    >
    Estimated time: {{ estimatedTime }}
  </p>
    <p
      data-test-id="cost"
    >
      Cost: {{ cost }}
    </p>
    <div>
      <h4>Route:</h4>
      <ul>
        <li class="stop" v-for="stop in stops" :key="stop">{{ stop }}</li>
      </ul>
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
