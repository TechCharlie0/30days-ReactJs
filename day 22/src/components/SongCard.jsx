import React, { useState } from 'react';

const SongCard = ({ song }) => {
  const [audio] = useState(new Audio(song.file));
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handlePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Update progress of the audio
  audio.ontimeupdate = () => {
    const currentProgress = (audio.currentTime / audio.duration) * 100;
    setProgress(currentProgress);
  };

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg overflow-hidden p-6 mb-6 hover:scale-105 transition-all duration-300 ease-in-out">
      {/* Left: Song Info */}
      <div className="flex items-center space-x-4">
        {/* Album Image */}
        <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
          <img src={song.albumArt || '/assets/placeholder.jpg'} alt="Album" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{song.title}</h3>
          <p className="text-sm text-gray-200">{song.artist}</p>
        </div>
      </div>

      {/* Right: Play/Pause and Progress Bar */}
      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={handlePlayPause}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${isPlaying ? 'bg-red-500' : 'bg-green-500'} transition-colors duration-300`}
        >
          <span className="text-2xl">{isPlaying ? '❚❚' : '►'}</span>
        </button>
        
        {/* Progress Bar */}
        <div className="w-24 h-2 bg-gray-700 rounded-full relative mt-2">
          <div className="h-full bg-gray-400 rounded-full" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
};

export default SongCard;
