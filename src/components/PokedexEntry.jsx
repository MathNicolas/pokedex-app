const PokedexEntry = ({ description }) => {

    return (
        <div className="flex justify-center items-center h-[10rem]">
            <p className="bg-custom-bg-img text-xs p-10 rounded-xl lg:w-[70rem]">{description}</p>
        </div>
    )
}

export default PokedexEntry;