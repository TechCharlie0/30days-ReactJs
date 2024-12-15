
import React, { useState } from "react";

function Letter() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="w-11/12 md:w-3/4 lg:w-1/2 bg-white p-8 rounded-lg shadow-2xl relative">
      {!opened ? (
        <div
          onClick={() => setOpened(true)}
          className="cursor-pointer text-center"
        >
          <div className="text-2xl font-serif text-gray-700">
            💌 Open Your Letter
          </div>
          <div className="mt-6 text-center text-sm text-gray-500">
            Click to reveal
          </div>
        </div>
      ) : (
        <div className="text-lg leading-relaxed font-serif text-gray-700 space-y-6">
          <p>My Dearest Love,</p>
          <p>
            From the moment I met you, my life became a symphony of joy,
            laughter, and endless love. Every day with you feels like a new
            adventure, and I cherish every second we share.
          </p>
          <p>
            You are my rock, my best friend, and the most incredible person I
            know. Thank you for being you, for loving me, and for making my
            world so beautiful.
          </p>
          <p>
            Always and forever yours,
            <br />
            <span className="italic text-pink-600">[Your Name]</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Letter;
