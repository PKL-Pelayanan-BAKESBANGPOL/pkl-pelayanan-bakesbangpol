import React from "react";
import { FaEnvelope, FaCreditCard, FaTimesCircle } from "react-icons/fa";

export default function FAQ({ icon, question, answer }) {
  return (
    // Icon Section
    <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-start">
      {icon}
      {/* Question Section */}
      <h3 className="font-semibold mb-2 text-base">{question}</h3>
      {/* Answer Section */}
      <p className="text-gray-600 mb-4 text-sm">{answer}</p>
    </div>
  );
}
