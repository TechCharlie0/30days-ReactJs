// src/utils/dateUtils.js

// Placeholder function to simulate Nepali date conversion
export const getNepaliDate = (gregorianDate) => {
    // Array of Nepali months
    const monthNames = [
      "Baisakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin", 
      "Kartika", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
    ];
    
    // Generate a random Nepali month from the list
    const nepaliMonth = monthNames[Math.floor(Math.random() * 12)];
    
    // Generate a random day between 1 and 30
    const nepaliDay = Math.floor(Math.random() * 30) + 1;
  
    // Return the simulated Nepali date (e.g., "Mangsir 1")
    return `${nepaliMonth} ${nepaliDay}`;
  };
  