export default function PokemonInfo({title, info}) {

    return (
        <div className="w-1/2 min-h-10 flex flex-col items-center gap-2 text-xs">
            <h2 className="text-white">{title}</h2>
            <p>{info}</p>
        </div>
    )
}