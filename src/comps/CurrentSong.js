import { useState } from "react";
import spotifyLogo from "../images/Spotify_icon.png";

function CurrentSong(params) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="w-[15vw] bg-neutral-950 rounded-md">
      <div className={`flex flex-row justify-between items-center p-3`}>
        <div className="flex flex-row gap-4" >
          <img
            className="w-10 h-10"
            src={require("../images/Spotify_icon.png")}
          />
          <div className="flex flex-col items-start text-neutral-300">
            <div>Creep</div>
            <div className="font-light text-sm">Radiohead</div>
          </div>
        </div>
        <div className="flex flex-row items-end gap-[3px]">
          <div className="w-[1.6px] h-3 bg-neutral-500 rounded-sm" />
          <div className="w-[1.6px] h-5 bg-neutral-500 rounded-sm" />
          <div className="w-[1.6px] h-2 bg-neutral-500 rounded-sm" />
          <div className="w-[1.6px] h-3 bg-neutral-500 rounded-sm" />
          <div className="w-[1.6px] h-1 bg-neutral-500 rounded-sm" />
        </div>
      </div>
      <div
        className={`visible h-4 text-[12px] transition-all delay-1000 duration-200 text-neutral-950 bg-[#19d861] rounded-b-md`}
      >
        Last played
      </div>
    </div>
  );
}

export default CurrentSong;
