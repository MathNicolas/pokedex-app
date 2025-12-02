export default function PokemonDisplay({ data, loading }) {
    return (
        <div className="h-[16rem] w-full flex flex-col justify-evenly items-center">
            <div className="w-8/12 flex justify-center pr-5 mt-3">
                {data?.sprites && (
                    <img
                        src={data.sprites.front_default}
                        alt={data.name}
                        className="h-44 w-44"
                    />
                )}
            </div>

            <div className="mt-6 w-7/12 h-6 flex justify-end items-end">
                <h1> {loading ? "Carregando..." : (<> <span className="text-gray-700">{data.id}</span> <span className="text-gray-500"> - {data.name}</span></>)}</h1>
            </div>
        </div>
    );
}
