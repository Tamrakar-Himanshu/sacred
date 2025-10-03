// src/components/FloatingButton.jsx
import React from "react";

const FloatingButton = () => {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 bg-[#D97F11] text-white rounded-full shadow-lg hover:bg-[#BF5F0B] transition-all w-16 h-16 flex items-center justify-center text-sm font-semibod "
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Get
      <br />
      Started
    </button>
  );
};

export default FloatingButton;
