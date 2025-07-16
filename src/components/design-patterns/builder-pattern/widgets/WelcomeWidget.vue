<template>
  <div class="widget welcome-widget">
    <h3>Welcome, {{ user }}!</h3>
  </div>
</template>

<script setup>
defineProps({
  user: {
    type: String,
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
.welcome-widget {
  background-color: #e0f7fa;
}
</style>
