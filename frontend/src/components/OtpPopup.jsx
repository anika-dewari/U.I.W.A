import React, { useState } from "react";

const OtpPopup = ({ isOpen, onClose, onSubmit }) => {
  const [otp, setOtp] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSubmit(otp);
    setOtp(""); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Enter OTP</h2>
        <p className="text-gray-600 text-sm mb-4 text-center">
          Enter the 6-digit OTP sent to your registered Email.
        </p>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 text-center text-lg"
          placeholder="Enter OTP"
        />
        <div className="flex justify-between items-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 text-sm font-medium"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-900 text-sm font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default OtpPopup;
