import React from 'react';
import SongCard from './SongCard';

const Playlist = () => {
  const songs = [
    { title: 'Antim Maya Lyrical', artist: 'Naren Limbu', file: '/assets/music/AntimMaya.mp3', albumArt: '/assets/images/antim-maya.jpg', id: 1 },
    { title: 'Samjhiney Mutu', artist: 'The Edge Band, Jeewan Gurung', file: '/assets/music/SamjhineyMutu.mp3', albumArt: '/assets/images/samjhiney-mutu.jpg', id: 2 },
    { title: 'Timi Sanga', artist: 'Sanjana Shrestha', file: '/assets/music/TimiSanga.mp3', albumArt: '/assets/images/timi-sanga.jpg', id: 3 },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">My Playlist</h2>
      <div className="space-y-4">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Playlist;
