import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonInfo from "../components/pokemonInfo";
import PokemonSprites from "../components/PokemonSprites";
import PokemonTypes from "../components/PokemonTypes";
import PokedexEntry from "../components/PokedexEntry";
import { BackgroundType, InfoList, PokeTypes, pokedexEntry } from "../utils/PokemonData";

export default function PokemonDetails() {

    const { name } = useParams();
    const [species, setSpecies] = useState({})
    const [pokemon, setPokemon] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPokemon = async () => {
            setError(false)
            setLoading(true)
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                setPokemon(result.data)

                const speciesResult = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
                setSpecies(speciesResult.data);
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchPokemon()
    }, [name])

    return (
        <div className="bg-gray-800 min-h-screen flex justify-center font-gameboy">
            {error ?
                <>
                    <div className="flex justify-center items-center flex-col gap-5">
                        <h1 className="text-white text-3xl">Looks like the Pokemon you're trying to find doesn't exist. :X </h1>
                        <p><Link to={`/`}>GO BACK</Link></p>
                    </div>
                </>
                :
                <div className="bg-white w-[80rem] flex flex-col justify-center">

                    <div className="flex justify-center pt-5 pb-5">
                        <h1 className="text-3xl"><span className='text-gray-700'>{pokemon.id}</span>  <span className='text-gray-500'> - {pokemon.name}</span> </h1>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center lg:flex-wrap">

                        <div className=" bg-custom-bg-img lg:h-[33rem] flex flex-wrap w-full lg:w-5/12 rounded-xl">
                            {pokemon.sprites && <PokemonSprites sprites={pokemon.sprites} />}
                        </div>

                        <div className="bg-custom-bg-infos p-5 flex items-center flex-wrap w-full lg:w-5/12 lg:h-[33rem] rounded-xl">
                            {InfoList(pokemon).map((item, index) => (
                                <PokemonInfo key={index} title={item.title} info={item.info} />
                            ))}
                        </div>

                    </div>

                    <PokemonTypes types={PokeTypes(pokemon)} backgroundtype={BackgroundType} />

                    <PokedexEntry description={pokedexEntry(species)} />

                    <div className="flex justify-center">
                        <p><Link to={`/`}>GO BACK</Link></p>
                    </div>

                </div>}

        </div>
    )
}