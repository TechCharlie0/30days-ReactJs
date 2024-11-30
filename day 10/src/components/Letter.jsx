import React from "react";

const Letter = ({ letterData }) => {
  const { firstName, lastName, message } = letterData;

  const copyToClipboard = () => {
    const text = `Dear ${firstName} ${lastName},\n\nYou are so special to me.\n\n${message}\n\nYours lovingly,`;
    navigator.clipboard.writeText(text);
    alert("Letter copied to clipboard!");
  };

  if (!firstName || !lastName || !message) return null;

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mt-6">
      <p className="text-gray-700">
        Dear <span className="font-bold text-pink-600">{firstName} {lastName}</span>,
      </p>
      <p className="mt-4">{message}</p>
      <p className="mt-6 text-right">Yours lovingly,</p>
      <button
        onClick={copyToClipboard}
        className="bg-pink-500 text-white px-4 py-2 rounded mt-4 hover:bg-pink-600"
      >
        Copy Letter
      </button>
    </div>
  );
};

export default Letter;
