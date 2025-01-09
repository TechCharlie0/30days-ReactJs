import React, { useState } from 'react';
import Control from './Control';
import ProgressBar from './ProgressBar';
import VolumeControl from './VolumeControl';
import Playlist from './Playlist';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);

  const next = () => {
    // Logic for next song
  };
  const prev = () => {
    // Logic for previous song
  };

  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-xl mx-auto">
      <div className="flex flex-col items-center">
        <img src="/assets/images/album-art.jpg" alt="Album" className="w-32 h-32 rounded-full mb-4" />
        <h2 className="text-xl font-semibold">Song Title</h2>
        <p className="text-sm text-gray-400">Artist Name</p>
      </div>
      <ProgressBar />
      <Control play={play} pause={pause} next={next} prev={prev} />
      <VolumeControl volume={volume} setVolume={setVolume} />
      <Playlist />
    </div>
  );
};

export default MusicPlayer;
