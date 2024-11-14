import React from "react";

const Filter = ({ FilterData, category, setCategory }) => {
  function filterHandler(title) {
    setCategory(title);
  }

  return (
    <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
      {FilterData.map((data) => (
        <button
          key={data.id}
          onClick={() => filterHandler(data.title)}
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
