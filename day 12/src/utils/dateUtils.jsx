// src/utils/dateUtils.js
import NepaliDate from 'nepali-date';

export const getNepaliDate = (gregorianDate) => {
  const nepaliDate = new NepaliDate(gregorianDate);
  return nepaliDate.format("YYYY-MM-DD"); // Format as Nepali date (e.g., "2079-09-25")
};

export const getNepaliMonth = (gregorianDate) => {
  const nepaliDate = new NepaliDate(gregorianDate);
  return nepaliDate.format("MMMM YYYY"); // Format as Nepali month and year (e.g., "Mansir 2079")
};

export const getTodayNepaliDate = () => {
  const nepaliDate = new NepaliDate();
  return nepaliDate.format("YYYY-MM-DD"); // Get today's Nepali date
};
