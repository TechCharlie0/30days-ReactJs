import React, { useState, useEffect } from 'react';
import { getNepaliDate, getNepaliMonth, getTodayNepaliDate } from '../utils/dateUtils';
import festivals from '../data/festivals.json';

const NepaliCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [nepaliDate, setNepaliDate] = useState("");
  const [nepaliMonth, setNepaliMonth] = useState("");
  const [festivalsOnMonth, setFestivalsOnMonth] = useState([]);
  
  const todayNepaliDate = getTodayNepaliDate();

  useEffect(() => {
    const nepaliDateString = getNepaliDate(currentDate);
    setNepaliDate(nepaliDateString);

    const nepaliMonthString = getNepaliMonth(currentDate);
    setNepaliMonth(nepaliMonthString);

    const festivalsInMonth = festivals.filter(festival => festival.date.startsWith(nepaliMonthString.split(' ')[0]));
    setFestivalsOnMonth(festivalsInMonth);
  }, [currentDate]);

  const generateDaysOfMonth = (month) => {
    let days = [];
    const date = new Date(month);
    date.setDate(1);
    const firstDay = date.getDay();
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
      days.push(null); // Empty days for alignment
    }

    for (let i = 1; i <= lastDay; i++) {
      days.push(i);
    }

    return days;
  };

  const handleClickDay = (day) => {
    if (!day) return;
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setCurrentDate(selectedDate);
  };

  const isFestival = (day) => {
    const selectedNepaliDate = `${nepaliMonth.split(' ')[0]}-${day < 10 ? '0' : ''}${day}`;
    return festivalsOnMonth.some(festival => festival.date === selectedNepaliDate);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-watercolor-blue via-watercolor-yellow to-watercolor-pink p-8">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white p-4 text-center">
          <h2 className="text-3xl font-bold">{nepaliMonth}</h2>
          <p className="text-xl mt-2">{nepaliDate}</p>
        </div>
        
        <div className="grid grid-cols-7 gap-4 p-6">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="font-semibold text-lg">{day}</div>
          ))}

          {generateDaysOfMonth(currentDate).map((day, index) => (
            <div
              key={index}
              onClick={() => handleClickDay(day)}
              className={`cursor-pointer p-4 text-center rounded-full transition duration-300 ease-in-out 
                          ${day === new Date().getDate() && 'bg-blue-500 text-white border-2 border-blue-600'} 
                          ${isFestival(day) && 'bg-yellow-200'} 
                          hover:bg-blue-100 hover:scale-110`}>
              {day || ''}
            </div>
          ))}
        </div>

        {festivalsOnMonth.length > 0 && (
          <div className="bg-white p-4 rounded-xl shadow-lg mt-6">
            <h3 className="text-2xl font-semibold mb-4">Festivals This Month</h3>
            <ul className="space-y-4">
              {festivalsOnMonth.map(festival => (
                <li key={festival.date} className="bg-gradient-to-r from-pink-200 to-yellow-200 p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold">{festival.name}</h4>
                  <p className="text-sm">{festival.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NepaliCalendar;
