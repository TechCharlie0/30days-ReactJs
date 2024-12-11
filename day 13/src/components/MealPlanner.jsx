import React from "react";

const MealPlanner = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold">Meal Planner</h1>
      <div className="grid grid-cols-7 gap-4">
        <div className="border p-4">Monday</div>
        <div className="border p-4">Tuesday</div>
        <div className="border p-4">Wednesday</div>
        <div className="border p-4">Thursday</div>
        <div className="border p-4">Friday</div>
        <div className="border p-4">Saturday</div>
        <div className="border p-4">Sunday</div>
      </div>
    </div>
  );
};

export default MealPlanner;
