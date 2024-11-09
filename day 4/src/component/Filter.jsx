import React, { useState } from "react";

const Filter = ({ FilterData }) => {
  const [category, setCategory] = useState(null);

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {FilterData.map((data) => (
        <button
          key={data.id}
          onClick={() => setCategory(data.title)}
          className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-slate-100 border-2 transition duration-300 ${
            category === data.title
              ? "bg-opacity-70 border-white"
              : "bg-opacity-40 border-transparent"
          } hover:bg-black hover:bg-opacity-90 hover:text-white`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
