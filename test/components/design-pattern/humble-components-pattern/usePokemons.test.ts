import { flushPromises } from "@vue/test-utils"
import MockAdapter from 'axios-mock-adapter';

import usePokemons from "@/components/design-patterns/humble-components-pattern/composables/usePokemons"

import { withSetup } from "../../../utils/with-setup"

import { pokemonApi } from "@/axios/pokeApi"
import { pokemonListFake } from "./data/fake-pokemons";

const mockPokemonApi = new MockAdapter(pokemonApi)

mockPokemonApi.onGet('/?limit=3').reply(200, {
    results: pokemonListFake
})

describe('usePokemons', ()=>{

    test('Should have the default values and fetch data', async ()=>{

        const [result, app] = withSetup(usePokemons)
        
        expect(result.isLoadingPokemonList.value).toBe(true);
        expect(result.pokemonList.value.length).toBe(0);
        
        await flushPromises()
        
        expect(result.isLoadingPokemonList.value).toBe(false);
        expect(result.pokemonList.value.length).toBe(3);
        
        result.pokemonList.value.forEach((pokemon, index)=>{
            expect(pokemon.name).toBe(pokemonListFake[index].name)
        })
        
    })


})