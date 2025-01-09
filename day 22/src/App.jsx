import React from 'react';
import MusicPlayer from './components/MusicPlayer'; // Main music player component
import Playlist from './components/Playlist';     // Playlist component
import VolumeControl from './components/VolumeControl'; // Volume control
import ProgressBar from './components/ProgressBar'; // Progress bar for song
import Control from './components/Control';        // Control (Play/Pause/Next/Previous)
import SongCard from './components/SongCard';      // Individual song card

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      {/* Music Player Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold">My Music Player</h1>
      </div>
      
      {/* Music Player Component */}
      <MusicPlayer />

      {/* Playlist Component */}
      <div className="mt-10 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">My Playlist</h2>
        <Playlist />
      </div>

      {/* Volume Control */}
      <div className="mt-6 w-full max-w-md">
        <VolumeControl />
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full max-w-md">
        <ProgressBar />
      </div>

      {/* Control (Play/Pause/Next/Previous) */}
      <div className="mt-6 w-full max-w-md">
        <Control />
      </div>
    </div>
  );
};

export default App;
