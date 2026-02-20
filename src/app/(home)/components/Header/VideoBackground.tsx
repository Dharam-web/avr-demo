"use client";
import React, { useRef, useState } from "react";

export const VideoBackground: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative h-[700px] max-sm:h-[240px] overflow-hidden">
      {/* Video container - Click to Play/Pause */}
      <div className="absolute inset-0 w-full h-full" onClick={togglePlayPause}>
        <video
          ref={videoRef}
          className="w-full h-full object-cover cursor-pointer"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay to prevent video interaction */}
      <div className="absolute inset-0 bg-black bg-opacity-30 pointer-events-none" />

      {/* Mute/Unmute & Play/Pause Icons */}
      <div className="absolute bottom-4 right-4 flex gap-3">
        {/* Play/Pause Button */}
        <button
          className="bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full z-10 flex items-center justify-center transition-all"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>

        {/* Mute/Unmute Button */}
        <button
          className="bg-white bg-opacity-70 hover:bg-opacity-90 p-2 rounded-full z-10 flex items-center justify-center transition-all"
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};
