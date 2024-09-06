import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios";
import { Link } from "react-router-dom";
import PokemonInfo from "../components/pokemonInfo";

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

    const InfoList = [
        { title: "Height", info: (pokemon.height / 10).toFixed(1) + "m" },
        { title: "Weight", info: (pokemon.weight / 10).toFixed(1) + "kg" },
        { title: "Ability", info: pokemon.abilities ? pokemon.abilities.map((type) => type.ability.name).join(", ") : 'N/A' },
        { title: "Base Exp", info: pokemon.base_experience },
        { title: "Base Stats", info: pokemon.stats && pokemon.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(", ") }
    ]

    const PokeTypes = pokemon.types ? pokemon.types.map((type) => type.type.name) : [];

    const BackgroundType = {
        "normal": "#9FA19F",
        "fire": "#E62829",
        "water": "#2980EF",
        "electric": "#FAC000",
        "grass": "#3FA028",
        "ice": "#3DCEF3",
        "fighting": "#FF8000",
        "poison": "#9141CB",
        "ground": "#915121",
        "flying": "#80B9EF",
        "psychic": "#EF4179",
        "bug": "#91A119",
        "rock": "#AFA981",
        "ghost": "#704170",
        "dragon": "#5060E1",
        "stell": "#60A1B8",
        "dark": "#624D4E",
        "fairy": "#EF70EF",
        "stellar": "#40B5A5",
    }

    const pokedexEntry = species.flavor_text_entries ? species.flavor_text_entries.find((entry) => entry.language.name === "en").flavor_text : "No description available";

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

                        <div className=" bg-custom-bg-img flex flex-wrap w-full lg:w-5/12 rounded-xl">
                            {pokemon.sprites && <>
                                <img src={pokemon.sprites.front_default} alt="" className="w-1/2" />
                                <img src={pokemon.sprites.back_default} alt="" className="w-1/2" />
                                <img src={pokemon.sprites.front_shiny} alt="" className="w-1/2" />
                                <img src={pokemon.sprites.back_shiny} alt="" className="w-1/2" />
                            </>}
                        </div>

                        <div className="bg-custom-bg-infos p-5 flex items-center flex-wrap w-full lg:w-5/12 lg:h-[33rem] rounded-xl">
                            {InfoList.map((item, index) => (
                                <PokemonInfo key={index} title={item.title} info={item.info} />
                            ))}
                        </div>

                    </div>

                    <div className="w-full flex items-center p-5 lg:pl-16 gap-3">
                        <h2>Types: </h2>
                        {PokeTypes.map((type, index) => (
                            <p className="p-2 rounded-md" style={{ backgroundColor: BackgroundType[type] }} key={index}>
                                {type}
                            </p>
                        ))}
                    </div>


                    <div className="flex justify-center items-center h-[10rem]">
                        <p className="bg-custom-bg-img text-xs p-10 rounded-xl">{pokedexEntry}</p>
                    </div>

                </div>}

        </div>
    )
}