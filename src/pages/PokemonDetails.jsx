import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import PokemonInfo from "../components/pokemonInfo";
import PokemonSprites from "../components/PokemonSprites";
import PokemonTypes from "../components/PokemonTypes";
import PokedexEntry from "../components/PokedexEntry";
import { usePokemon } from '../hooks/usePokemon';
import { BackgroundType, InfoList, PokeTypes, pokedexEntry } from "../utils/PokemonData";

export default function PokemonDetails() {

    const { name } = useParams();
    const { data, pokemonSpecies, loading, error, refetch: fetchPokemon } = usePokemon(name);

    return (
        <div className="bg-gray-800 min-h-screen flex justify-center items-center font-gameboy">
            {!loading && data &&
                <div className="bg-white w-[80rem] h-screen flex flex-col justify-center">

                    <div className="flex justify-center pt-5 pb-5">
                        <h1 className="text-3xl"><span className='text-gray-700'>{data.id}</span>  <span className='text-gray-500'> - {data.name}</span> </h1>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-around lg:items-center lg:flex-wrap">

                        <div className=" bg-custom-bg-img lg:h-[33rem] flex flex-wrap w-full lg:w-5/12 rounded-xl">
                            {data.sprites && <PokemonSprites sprites={data.sprites} />}
                        </div>

                        <div className="bg-custom-bg-infos p-5 flex items-center flex-wrap w-full lg:w-5/12 lg:h-[33rem] rounded-xl">
                            {InfoList(data).map((item, index) => (
                                <PokemonInfo key={index} title={item.title} info={item.info} />
                            ))}
                        </div>

                    </div>

                    <PokemonTypes types={PokeTypes(data)} backgroundtype={BackgroundType} />

                    <PokedexEntry description={pokedexEntry(pokemonSpecies)} />

                    <div className="flex justify-center">
                        <p><Link to={`/`}>GO BACK</Link></p>
                    </div>

                </div>
            }
            {error &&
                <div className="flex justify-center items-center flex-col gap-5">
                    <h1 className="text-white text-3xl">Looks like the Pokemon you're trying to find doesn't exist. :X </h1>
                    <p><Link to={`/`}>GO BACK</Link></p>
                </div>
            }
            {loading && <h1 className="text-white text-3xl">Loading...</h1>}
        </div>
    )
}