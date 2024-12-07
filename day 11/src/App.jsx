import React, { useState } from "react";
import Header from "./components/Header";
import CalendarCard from "./components/CalendarCard";
import DateInfo from "./components/DateInfo";

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hoveredDate, setHoveredDate] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="max-w-lg w-full">
        {/* Header */}
        <Header title="Nepali Calendar" />

        {/* Calendar Card */}
        <CalendarCard
          onDateChange={(date) => setSelectedDate(date)}
          onDateHover={(date) => setHoveredDate(date)}
        />

        {/* Date Information */}
        <div className="bg-white shadow rounded-lg p-4 mt-4">
          <DateInfo label="Hovered BS Date" date={hoveredDate} />
          <DateInfo label="Selected BS Date" date={selectedDate} />
        </div>
      </div>
    </div>
  );
};

export default App;
