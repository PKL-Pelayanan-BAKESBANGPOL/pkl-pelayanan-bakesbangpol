import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollUp() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#86B6F6] text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 focus:ring-2"
        >
          <IoIosArrowUp className="w-7 h-7 hover:animate-moveIcon" />
        </button>
      )}
    </>
  );
}
