import { useEffect, useState } from 'react';
import axios from 'axios';
export function useAllPokemon() {
    const [allPokemon, setAllPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchAllPokemon = async () => {
            setError(false)
            setLoading(true)
            try {
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1025')
                setAllPokemon(result.data.results)
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        };
        fetchAllPokemon();
    }, []);

    return { allPokemon, loading, error};
}