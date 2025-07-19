import React, { useState } from "react";
import { dummyTrailers } from "../assets/assets";
import BlurCircle from "./BlurCircle";
import { PlayCircleIcon } from "@heroicons/react/24/solid";

const TrailersSection = () => {
  const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-44 py-20 overflow-hidden">
      <p className="text-gray-300 font-medium text-lg max-w-[960px] mx-auto">
        EventHighlights
      </p>

      <div className="relative mt-6">
        <BlurCircle top="-100px" right="-100px" />

        <video
          src={currentTrailer.videoUrl}
          controls
          className="mx-auto max-w-full"
          width="960"
          height="540"
        />
      </div>
      <div className="group grid grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto ">
        {dummyTrailers.map((trailer) => (
          <div
            key={trailer.image}
            className="relative hover:opacity-100 transition duration-300
 max-md:h-60 cursor-pointer"
            onClick={() => setCurrentTrailer(trailer)}
          >
            <img
              src={trailer.image}
              alt="trailer"
              className="rounded-lg w-full h-full object-cover brightness-75"
            />
            <PlayCircleIcon
              strokeWidth={1.6}
              className="absolute rounded top-1/2 left-1/2 w-5 md:w-8 h-5 md:h-12 transform -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrailersSection;
