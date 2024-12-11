import React from "react";

const ShoppingList = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold">Shopping List</h1>
      <ul className="list-disc pl-5">
        <li>Chicken - 2 pieces</li>
        <li>Tomatoes - 5</li>
        <li>Olive oil - 1 bottle</li>
      </ul>
    </div>
  );
};

export default ShoppingList;
