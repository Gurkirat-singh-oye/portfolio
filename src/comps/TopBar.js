

function TopBar(params) {
    
    return (
        <div className="fixed flex justify-between items-center  w-full h-16 bg-[#123524] bg-opacity-45 z-40" >
            <div className="absolute h-full w-full backdrop-blur-sm" />
            <div className=" px-4 font-thin text-neutral-200 text-6xl z-40" >JBD</div>
            <div className="w-full flex flex-row justify-center gap-36 text-neutral-200 z-40" >
                <div className="cursor-pointer hover:text-[#123524] hover:scale-110 transition-all duration-300" >Projects</div>
                <div className="cursor-pointer hover:text-[#123524] hover:scale-110 transition-all duration-300" >Gallery</div>
                <div className="cursor-pointer hover:text-[#123524] hover:scale-110 transition-all duration-300">Github</div>
                <div className="cursor-pointer hover:text-[#123524] hover:scale-110 transition-all duration-300">LinkedIn</div>
            </div>
        </div>
    )

}



export default TopBar;