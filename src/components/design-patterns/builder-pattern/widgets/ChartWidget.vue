<template>
  <div class="widget chart-widget">
    <h4>Chart Widget</h4>
    <p>Type: {{ chartType }}</p>
    <p>Data: {{ data.join(', ') }}</p>
  </div>
</template>

<script setup>
defineProps({
  chartType: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.widget {
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.chart-widget {
  background-color: #fce4ec;
}
</style>
