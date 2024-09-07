const PokedexEntry = ({ description }) => {

    return (
        <div className="flex justify-center items-center h-[10rem]">
            <p className="bg-custom-bg-img text-xs p-10 rounded-xl">{description}</p>
        </div>
    )
}

export default PokedexEntry;