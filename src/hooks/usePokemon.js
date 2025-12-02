import { useEffect, useState } from 'react';
import axios from 'axios';
export function usePokemon(pokemon = 'bulbasaur') {
    const [data, setData] = useState(null);
    const [pokemonSpecies, setPokemonSpecies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPokemon = async () => {
        setError(false)
        setLoading(true)
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            setData(result.data)

            const speciesResult = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`);
            setPokemonSpecies(speciesResult.data);
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (pokemon) fetchPokemon();
    }, []);

    return { data, pokemonSpecies, loading, error, refetch: fetchPokemon };
}