import { ref, watch, type Ref } from "vue";

export default function useSearchQuery(searchQuery: Ref<string>, ms = 3000) {
  const debounceSearch = ref('');
  const isLoading = ref(false)
  let timeoutId: number | undefined;

  watch(searchQuery, (newQuery) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    isLoading.value = true;

    timeoutId = setTimeout(() => {
      debounceSearch.value = newQuery;
      isLoading.value = false;
    }, ms);
  });

  return {
    debounceSearch,
    isLoading
  };
}
