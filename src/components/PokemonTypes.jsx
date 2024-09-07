const PokemonTypes = ({types, backgroundtype}) => {

    return (
        <div className="w-full flex items-center p-5 lg:pl-16 gap-3">
            <h2>Types: </h2>
            {types.map((type, index) => (
                <p className="p-2 rounded-md" style={{ backgroundColor: backgroundtype[type] }} key={index}>
                    {type}
                </p>
            ))}
        </div>
    )
}

export default PokemonTypes;