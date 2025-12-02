import pokedexImg from "../img/pokedex.png";

export default function PokedexFrame({ children }) {
    return (
        <div className="bg-no-repeat bg-center w-[27rem] h-[40rem] flex flex-col items-center justify-center" style={{ backgroundImage: `url(${pokedexImg})` }}>
            <div className="h-[9rem] w-full" />
            {children}
        </div>
    );
}
