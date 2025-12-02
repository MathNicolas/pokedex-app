export default function SearchBox({ value, onChange, onSubmit, suggestions, onSuggestionClick }) {
    return (
        <form className="flex flex-col items-center justify-center gap-9 relative" onSubmit={onSubmit}>
            <input className="w-64 h-9 pl-2 border border-black rounded shadow-[-2px_2px_0px_#7C8181,-3px_3px_0px_#4A2B33]" placeholder="Id or Name" type="text" value={value} onChange={e => onChange(e.target.value)} />
            {suggestions.length > 0 && (
                <ul className="bg-white border border-gray-300 w-64 mt-1 max-h-36 rounded overflow-y-auto absolute top-8 z-10">
                    {suggestions.map(s => (
                        <li key={s.name} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => onSuggestionClick(s.name)}>
                            {s.name}
                        </li>
                    ))}
                </ul>
            )}
            <button className="bg-custom-button-dark h-10 w-36 text-white border border-black rounded-md shadow-[-2px_2px_0px_0px_#2b2b2b,-4px_4px_0px_0px_#1a0108]">
                Search
            </button>
        </form>
    );
}
