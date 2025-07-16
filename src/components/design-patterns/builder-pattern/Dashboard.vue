<template>
  <div class="dashboard">
    <!-- Use v-bind to pass all props to the component because each component has different props  -->
    <component
      v-for="(widget, index) in widgets"
      :is="widget.component"
      :key="index"
      v-bind="widget.props"
    />
  </div>
</template>

<script setup>
defineProps({
  widgets: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
