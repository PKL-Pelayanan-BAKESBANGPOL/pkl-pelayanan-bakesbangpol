import React, { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollUp() {
  const [showButton, setShowButton] = useState(false); // State untuk mengontrol visibilitas tombol
  const [animate, setAnimate] = useState(false); // State untuk mengontrol animasi ikon

  // Efek untuk menambahkan dan membersihkan event listener scroll
  useEffect(() => {
    const handleScroll = () => {
      // Menampilkan tombol jika halaman di-scroll lebih dari 300 piksel
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    // Menambahkan event listener scroll
    window.addEventListener("scroll", handleScroll);
    // Membersihkan event listener saat komponen dimuat
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    setAnimate(true); // Aktifkan animasi
    // Matikan animasi setelah 500 milidetik
    setTimeout(() => {
      setAnimate(false);
      // Scroll halaman ke atas dengan smooth behavior
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 500); // Durasi animasi
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-[#86B6F6] text-white p-3 rounded-full shadow-lg hover:bg-blue-500 transition duration-300 focus:ring-2"
        >
          <IoIosArrowUp
            className={`w-7 h-7 ${animate ? "animate-moveIcon" : ""}`}
          />
        </button>
      )}
    </>
  );
}
