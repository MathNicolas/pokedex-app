import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { usePokemon } from '../hooks/usePokemon';
import { useAllPokemon } from '../hooks/useAllPokemon';
import PokedexFrame from '../components/pokemonFrame';
import PokemonDisplay from '../components/pokemonDisplay';
import SearchBox from '../components/searchBox';

export default function Index() {
    const [pokemonName, setPokemonname] = useState("bulbasaur");
    const [suggestions, setSuggestions] = useState([]);
    const { data, loading, refetch } = usePokemon(pokemonName);
    const { allPokemon } = useAllPokemon();

    useEffect(() => {
        const name = pokemonName.toLowerCase();
        if (!name) {
            setSuggestions([]);
            return;
        }
        if (allPokemon.some(p => p.name.toLowerCase() === name)) {
            setSuggestions([]);
            return;
        }
        const filtered = allPokemon
            .filter(pokemon => pokemon.name.includes(name))
            .slice(0, 5);
        setSuggestions(filtered);
    }, [pokemonName, allPokemon]);

    const handleSubmit = e => {
        e.preventDefault();
        refetch();
        setSuggestions([]);
        setPokemonname("");
    };

    const handleSuggestionClick = name => {
        setPokemonname(name);
        setSuggestions([]);
    };

    return (
        <div className="bg-gradient-to-b from-custom-bg-green to-custom-bg-yellow min-h-screen font-gameboy flex flex-col justify-center items-center">
            {data && (
                <PokedexFrame>
                    <PokemonDisplay data={data} loading={loading} />
                    <div className="h-[15rem] w-full flex flex-col justify-around items-center">
                        <SearchBox value={pokemonName} onChange={setPokemonname} onSubmit={handleSubmit} suggestions={suggestions} onSuggestionClick={handleSuggestionClick} />
                        <p> <Link to={`/pokemon/${data.name}`}>Read More</Link></p>
                    </div>
                </PokedexFrame>
            )}
            <p className="mt-5">
                <Link to="/all">See all Pokemons</Link>
            </p>
        </div>
    );
}
