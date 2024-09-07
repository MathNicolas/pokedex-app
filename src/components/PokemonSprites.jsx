const PokemonSprites = ({ sprites }) => {
    return (
        <>
            <img src={sprites.front_default} alt="" className="w-1/2" />
            <img src={sprites.back_default} alt="" className="w-1/2" />
            <img src={sprites.front_shiny} alt="" className="w-1/2" />
            <img src={sprites.back_shiny} alt="" className="w-1/2" />
        </>
    )
}

export default PokemonSprites;