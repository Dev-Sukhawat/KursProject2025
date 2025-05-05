import React from "react";
import Video from "../../assets/video/intro.mp4";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeXmark, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Intro() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };
  return (
    <section className="intro-container flex w-full lg:w-[100%] lg:h-[50%] items-start justify-center justify-items-center bg-white mt-4 ">
      <video
        ref={videoRef}
        className="w-[90%] h-auto object-fit-cover rounded-lg shadow-lg"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={Video} type="video/mp4" alt="Welcome To MetalMorph" />
        Your browser does not support the video tag.
      </video>
      <button
        onClick={toggleMute}
        className="absolute left-[5%] bg-white/80 px-0.5 md:px-2.5 py-0.1 md:py-2 mt-1 ml-1 lg:mt-2 lg:ml-2 rounded-full shadow hover:bg-white transition"
      >
        {isMuted ? (
          <FontAwesomeIcon icon={faVolumeXmark} />
        ) : (
          <FontAwesomeIcon icon={faVolumeHigh} />
        )}
      </button>
    </section>
  );
}
