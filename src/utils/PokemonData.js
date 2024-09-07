export const BackgroundType = {
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
    "steel": "#60A1B8",
    "dark": "#624D4E",
    "fairy": "#EF70EF",
    "stellar": "#40B5A5",
}

export const InfoList = (pokemon) => [
    { title: "Height", info: (pokemon.height / 10).toFixed(1) + "m" },
    { title: "Weight", info: (pokemon.weight / 10).toFixed(1) + "kg" },
    { title: "Ability", info: pokemon.abilities ? pokemon.abilities.map((type) => type.ability.name).join(", ") : 'N/A' },
    { title: "Base Exp", info: pokemon.base_experience },
    { title: "Base Stats", info: pokemon.stats && pokemon.stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(", ") }
]

export const PokeTypes = (pokemon) => pokemon.types ? pokemon.types.map((type) => type.type.name) : [];

   
export const pokedexEntry = (species) => species.flavor_text_entries ? species.flavor_text_entries.find((entry) => entry.language.name === "en").flavor_text : "No description available";