<template>
  <div>
    <input v-model="search" placeholder="Search..." />
    <div v-if="isLoading">Loading...</div>
    <ul v-else-if="results.length">
      <li v-for="result in results" :key="result.id">{{ result.name }}</li>
    </ul>
    <div v-else-if="search && !results.length && !isLoading">No results found</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import useSearchQuery from "../composables/useSearchQuery";

const search = ref("");
const { debounceSearch, isLoading } = useSearchQuery(search, 1000);
const results = ref<any[]>([]);
// const isLoading = ref(false);

const fakeApiCall = (query: string): Promise<any[]> => {
  console.log(`Searching for: ${query}`);

  return new Promise((resolve) => {
    setTimeout(() => {
      if (query) {
        resolve([
          { id: 1, name: `Result for ${query} 1` },
          { id: 2, name: `Result for ${query} 2` },
          { id: 3, name: `Result for ${query} 3` },
        ]);
      } else {
        resolve([]);
      }
    }, 1000);
  });
};

watch(debounceSearch, async (newQuery) => {

  console.log('After debounce')

  if (newQuery) {
    isLoading.value = true;
    results.value = await fakeApiCall(newQuery);
    isLoading.value = false;
  } else {
    results.value = [];
  }
});
</script>
