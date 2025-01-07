import React, { useState, useRef } from "react";
import Playlist from "./Playlist";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";

const MusicPlayer = () => {
  const songs = [
    {
      id: 1,
      title: "Antim Maya",
      artist: "Naren Limbu",
      src: "/assets/songs/antim-maya.mp3",
      albumArt: "/assets/images/antim maya.jpg",
    },
    {
      id: 2,
      title: "Samjhiney Mutu",
      artist: "The Edge Band",
      src: "/assets/songs/samjhiney-mutu.mp3",
      albumArt: "/assets/images/rob.jpg",
    },
    {
      id: 3,
      title: "Timi Sanga",
      artist: "Sanjana Shrestha",
      src: "/assets/songs/timi-sanga.mp3",
      albumArt: "/assets/images/samjiney mutu.jpg",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(null);

  const currentSong = songs[currentSongIndex];

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
    setIsPlaying(true);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const handleProgressChange = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setProgress(newTime);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        <img
          src={currentSong.albumArt}
          alt={currentSong.title}
          className="w-40 h-40 object-cover rounded-full shadow-lg mb-4"
        />
        <h2 className="text-2xl font-bold">{currentSong.title}</h2>
        <p className="text-sm text-gray-300">{currentSong.artist}</p>
      </div>

      <ProgressBar
        progress={progress}
        duration={audioRef.current?.duration || 0}
        onChange={handleProgressChange}
      />

      <Controls
        isPlaying={isPlaying}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <VolumeControl volume={volume} onChange={handleVolumeChange} />

      <Playlist
        songs={songs}
        onSelect={(index) => setCurrentSongIndex(index)}
        currentSongIndex={currentSongIndex}
      />

      <audio
        ref={audioRef}
        src={currentSong.src}
        onTimeUpdate={() =>
          setProgress(audioRef.current.currentTime)
        }
        onEnded={handleNext}
      />
    </div>
  );
};

export default MusicPlayer;
