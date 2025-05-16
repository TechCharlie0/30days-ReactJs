import React from "react";

const Card = ({ title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-transparent bg-white p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-gradient hover:shadow-xl">
      <div className="absolute -top-2 -left-2 h-24 w-24 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-10 blur-2xl"></div>

      {/* Icon or Avatar */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-500 to-purple-500 text-white shadow-md">
       
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 18h.01M6.93 6.93l1.41 1.41M17.66 17.66l1.41 1.41M3 12h3m12 0h3M6.34 17.66l1.41-1.41M17.07 6.93l1.41-1.41" />
        </svg>
      </div>

      <h2 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
        {title}
      </h2>
      <p className="mt-2 text-gray-600">{description}</p>

      {/* Call to action */ }
  <button className="mt-4 inline-block rounded-md bg-purple-500 px-4 py-2 text-white transition hover:bg-purple-600">
    Learn More
  </button>
    </div >
  );
};

export default Card;
