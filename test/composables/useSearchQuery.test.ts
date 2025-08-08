import { ref } from "vue"
import useSearchQuery from "../../src/composables/useSearchQuery"

describe('useSearchQuery', ()=> {

    test('Change debounceSearch after waiting for 1000 ms after the last change', async ()=>{
        const searchQuery = ref('')

        const { debounceSearch, isLoading } = useSearchQuery(searchQuery, 1000)

        searchQuery.value = 'test'

        expect(debounceSearch.value).toBe('')
        expect(isLoading.value).toBe(false)
        
        await new Promise(resolve => setTimeout(resolve, 1100))
        
        expect(debounceSearch.value).toBe('test')        
        expect(isLoading.value).toBe(false)

    })

    test('should set isLoading to true immediately after the search query changes', async () => {
        const searchQuery = ref('');
        const { debounceSearch, isLoading } = useSearchQuery(searchQuery, 500);
    
        searchQuery.value = 'new query';

        await new Promise(resolve => setTimeout(resolve, 10));
    
        expect(isLoading.value).toBe(true);
    
        await new Promise(resolve => setTimeout(resolve, 510));
    
        expect(isLoading.value).toBe(false);
        expect(debounceSearch.value).toBe('new query');
      });
    
      test('should cancel the previous timeout if the search query changes again', async () => {
        const searchQuery = ref('');
        const { debounceSearch, isLoading } = useSearchQuery(searchQuery, 500);
    
        searchQuery.value = 'first';
    
        await new Promise(resolve => setTimeout(resolve, 450));
    
        searchQuery.value = 'second';
    
        expect(isLoading.value).toBe(true);
        expect(debounceSearch.value).toBe('');
    
        await new Promise(resolve => setTimeout(resolve, 510));
        
        expect(isLoading.value).toBe(false);
        expect(debounceSearch.value).toBe('second');
      });

})
