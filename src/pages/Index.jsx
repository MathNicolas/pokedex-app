import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Index() {

    const fetchPokemon = async () => {
        setError(false)
        setLoading(true)
        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            setPokemon(result.data)
        } catch (error) {
            setError(true)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchPokemon();
    }, []);

    const [pokemon, setPokemon] = useState({})
    const [pokemonName, setPokemonname] = useState('bulbasaur')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchPokemon();
        setPokemonname("")
    }


    return (
        <div className='bg-gradient-to-b from-custom-bg-green to-custom-bg-yellow min-h-screen flex justify-center items-center'>
            {pokemon &&
                <div className='bg-pokedex bg-no-repeat bg-center w-[27rem] h-[40rem] flex flex-col items-center justify-center font-gameboy'>

                    <div className='h-[9rem] w-full'>

                    </div>

                    <div className='h-[16rem] w-full flex flex-col justify-evenly items-center'>
                        <div className='w-8/12 flex justify-center pr-5 mt-3'>
                            {pokemon.sprites && (
                                <img src={pokemon.sprites.front_default} alt={pokemon.name} className='h-44 w-44' />
                            )}
                        </div>
                        <div className=' mt-6 w-7/12 h-6 flex justify-end items-end'>
                            <h1><span className='text-gray-700'>{pokemon.id}</span>  <span className='text-gray-500'> - {pokemon.name}</span> </h1>
                        </div>
                    </div>

                    <div className='h-[15rem] w-full flex flex-col justify-around items-center'>

                        <form className='flex flex-col items-center justify-center gap-9' onSubmit={handleSubmit}>

                            <input className='w-64 h-9 pl-2 border border-black rounded shadow-[-2px_2px_0px_#7C8181,-3px_3px_0px_#4A2B33]' placeholder='Id or Name' type="text" name="" id="" value={pokemonName} onChange={(e) => setPokemonname(e.target.value)} />
                            <button className='bg-custom-button-dark h-10 w-36 text-white border border-black rounded-md shadow-[-2px_2px_0px_0px_#2b2b2b,-4px_4px_0px_0px_#1a0108]'>Search</button>

                        </form>

                        <p>
                            <Link to={`/pokemon/${pokemon.name}`}>Read More</Link>
                        </p>
                    </div>

                </div>
            }
        </div>
    );
};
