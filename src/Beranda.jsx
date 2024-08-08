import React, { useState } from "react";
import {
  IoDocumentAttachSharp,
  IoTime,
  IoWarningOutline,
  IoCall,
  IoDocumentText,
} from "react-icons/io5";
import {
  FaArrowsDownToPeople,
  FaPersonCircleQuestion,
  FaRegCommentDots,
} from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { GoArrowRight } from "react-icons/go";
import { TbLocationQuestion } from "react-icons/tb";
import Header from "./assets/Header.png";
import Bakesbangpol from "./assets/Logo Bakesbangpol.png";
import ScrollUp from "./ScrollUp";
import FAQ from "./FAQ";
import FAQBackground from "./assets/FAQ Background.png";
import Footer from "./Footer";

export default function Beranda() {
  // Function untuk melakukan scroll ke section grid
  const scrollToGridSection = () => {
    document
      .getElementById("grid-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  // State untuk menyimpan teks pencarian
  const [searchTerm, setSearchTerm] = useState("");

  // Daftar FAQ yang akan ditampilkan
  const faqs = [
    {
      icon: <IoDocumentAttachSharp className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Dokumen apa saja yang diperlukan untuk mengajukan permohonan layanan?",
      answer:
        "Umumnya, dokumen yang diperlukan yaitu foto copy KTP, surat pengantar resmi, dan dokumen pendukung lainnya sesuai dengan jenis layanan yang Anda butuhkan.",
    },
    {
      icon: <IoWarningOutline className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Apa yang harus Saya lakukan jika ada masalah dengan permohonan Saya?",
      answer:
        "Anda dapat menghubungi layanan pelanggan BAKESBANGPOL Provinsi Jawa Timur melalui kontak yang tersedia di website resmi atau datang langsung ke kantor BAKESBANGPOL untuk mendapatkan bantuan lebih lanjut.",
    },
    {
      icon: <IoTime className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Berapa lama waktu yang dibutuhkan untuk memproses permohonan layanan?",
      answer:
        "Waktu pemrosesan bervariasi tergantung pada jenis layanan dan kelengkapan dokumen yang diajukan. Untuk permohonan layanan secara offline, biasanya akan langsung diproses di tempat. Sedangkan untuk permohonan layanan secara online, Anda akan menerima pemberitahuan mengenai status permohonan melalui Email dalam waktu beberapa hari kerja.",
    },
    {
      icon: (
        <FaPersonCircleQuestion className="w-12 h-12 mb-4 text-[#003285]" />
      ),
      question:
        "Apa saja layanan yang disediakan oleh BAKESBANGPOL Provinsi Jawa Timur?",
      answer:
        "BAKESBANGPOL Provinsi Jawa Timur menyediakan berbagai layanan, seperti penerbitan izin organisasi masyarakat, koordinasi pemilu, sosialisasi kebijakan pemerintah, dan layanan pengaduan masyarakat.",
    },
    {
      icon: <TbLocationQuestion className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Di mana saya bisa menemukan informasi lebih lanjut mengenai program BAKESBANGPOL Provinsi Jawa Timur?",
      answer:
        "Dapat ditemukan di website resmi BAKESBANGPOL, media sosial, dan publikasi resmi lainnya. Anda juga dapat mengunjungi kantor BAKESBANGPOL untuk mendapatkan informasi lebih lengkap.",
    },
    {
      icon: <IoCall className="w-12 h-12 mb-4 text-[#003285]" />,
      question: "Bagaimana cara menghubungi BAKESBANGPOL Provinsi Jawa Timur?",
      answer: (
        <>
          Anda dapat menghubungi BAKESBANGPOL Provinsi Jawa Timur melalui
          telepon, Email, atau datang langsung ke kantor BAKESBANGPOL. Informasi
          kontak lengkap dapat ditemukan di{" "}
          <a
            href="https://bakesbangpol.jatimprov.go.id/"
            className="text-[#86B6F6] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            website resmi{" "}
          </a>
          BAKESBANGPOL Provinsi Jawa Timur.
        </>
      ),
    },
    {
      icon: (
        <FaPersonCircleQuestion className="w-12 h-12 mb-4 text-[#003285]" />
      ),
      question: "Apakah ada biaya yang dikenakan untuk setiap layanan?",
      answer:
        "Tidak, semua layanan yang diberikan oleh BAKESBANGPOL Provinsi Jawa Timur tidak dikenakan biaya. Anda dapat mengajukan permohonan layanan tanpa biaya apapun. Informasi lebih lanjut dapat ditemukan di website ini atau dengan menghubungi layanan pelanggan.",
    },
    {
      icon: <IoDocumentAttachSharp className="w-12 h-12 mb-4 text-[#003285]" />,
      question: "Bagaimana cara mengajukan permohonan izin penelitian?",
      answer: (
        <>
          Untuk mengajukan permohonan izin penelitian, Anda perlu membaca
          ketentuan pada{" "}
          <a
            href="/persyaratan-perizinan-rekomendasi-penelitian"
            className="text-[#86B6F6] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            halaman berikut
          </a>{" "}
          dan melampirkan dokumen yang diperlukan seperti fotocopy
          KTP/Identitas, proposal penelitian dan surat pengantar dari institusi
          terkait.
        </>
      ),
    },
    {
      icon: <TbLocationQuestion className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Bagaimana cara mengetahui status permohonan saya yang sedang diproses?",
      answer:
        "Jika dokumen Anda sudah dikirim pada formulir, maka dokumen Anda sedang diproses. Jika dalam beberapa hari ke depan masih belum mendapat Email, dapat menghubungi layanan secara langsung untuk mengetahui status permohonan Anda yang sedang diproses.",
    },

    {
      icon: <IoTime className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Kapan waktu operasional pelayanan rekomendasi penelitian di BAKESBANGPOL Provinsi Jawa Timur?",
      answer:
        "Kantor BAKESBANGPOL Provinsi Jawa Timur beroperasi pada hari kerja, yaitu Senin hingga Jumat, mulai pukul 07.15 hingga 14.30 WIB.",
    },
    {
      icon: <FaArrowsDownToPeople className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Apakah BAKESBANGPOL Provinsi Jawa Timur menyediakan layanan online untuk permohonan?",
      answer:
        "Ya, BAKESBANGPOL menyediakan layanan online untuk berbagai permohonan melalui website ini. Anda dapat mengajukan permohonan tanpa perlu datang langsung ke kantor.",
    },
    {
      icon: <IoDocumentText className="w-12 h-12 mb-4 text-[#003285]" />,
      question:
        "Apakah Saya perlu membuat janji temu sebelum mengunjungi kantor pelayanan BAKESBANGPOL?",
      answer:
        "Tidak perlu membuat janji temu sebelum mengunjungi kantor BAKESBANGPOL. Anda dapat datang langsung selama jam operasional untuk mendapatkan layanan yang Anda butuhkan.",
    },
  ];

  // Memfilter FAQ berdasarkan teks pencarian
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center min-h-screen bg-[#EEF5FF]">
        <img
          src={Header}
          className="absolute inset-0 object-cover w-full h-full opacity-15"
          alt="Header Image"
        />
        <div className="relative max-w-6xl mx-auto px-8 py-16 md:py-28 flex flex-col md:flex-row items-center justify-between z-10">
          <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6">
              Pelayanan
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-7 md:mb-9">
              BAKESBANGPOL
            </h2>
            <p className="text-gray-500 text-base md:text-xl font-medium mb-6">
              Akses mudah dan cepat ke berbagai layanan yang disediakan oleh
              Badan Kesatuan Bangsa dan Politik Provinsi Jawa Timur
            </p>
            <button
              onClick={scrollToGridSection}
              className="bg-[#2A629A] text-white font-medium px-4 py-2 rounded-full hover:bg-[#003285] transition duration-300 inline-block"
            >
              Kunjungi Laman
            </button>
          </div>
          <div className="md:w-1/3 order-1 md:order-2 mb-4 md:mb-0">
            <img
              src={Bakesbangpol}
              alt="Logo Bakesbangpol"
              className="w-full md:w-auto h-auto"
              // className="w-96 md:w-96 h-auto"
            />
          </div>
        </div>
      </div>

      {/* Grid Section
      <div id="grid-section" className="bg-[#EEF5FF] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
              <FaArrowsDownToPeople className="w-20 h-20 mb-4 text-[#2A629A]" />
              <h3 className="text-2xl font-semibold mb-2">Ormas</h3>
              <p className="text-gray-600 mb-4">
                Pendaftaran Ormas dan Pelaporan Keberadaan Ormas
              </p>
              <a
                href="#"
                className="text-[#86B6F6] hover:underline flex items-center"
              >
                Baca Selengkapnya{" "}
                <span className="ml-2">
                  <GoArrowRight />
                </span>
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
              <ImSearch className="w-20 h-20 mb-4 text-[#2A629A]" />
              <h3 className="text-2xl font-semibold mb-2">Penelitian</h3>
              <p className="text-gray-600 mb-4">
                Perizinan Rekomendasi Penelitian Observasi, Skripsi, Tesis,
                Disertasi, Magang, PKL, PKN, KKN
              </p>
              <a
                href="/persyaratan-perizinan-rekomendasi-penelitian"
                className="text-[#86B6F6] hover:underline flex items-center"
              >
                Baca Selengkapnya{" "}
                <span className="ml-2">
                  <GoArrowRight />
                </span>
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
              <GiHumanPyramid className="w-20 h-20 mb-4 text-[#2A629A]" />
              <h3 className="text-2xl font-semibold mb-2">Parpol</h3>
              <p className="text-gray-600 mb-4">
                Pengurusan Surat Keterangan Terdaftar (SKT) Parpol
              </p>
              <a
                href="#"
                className="text-[#86B6F6] hover:underline flex items-center"
              >
                Baca Selengkapnya{" "}
                <span className="ml-2">
                  <GoArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div> */}

      {/* Grid Section */}
      <div id="grid-section" className="bg-[#EEF5FF] py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
              <IoDocumentAttachSharp className="w-16 h-16 mb-4 text-[#003285]" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Panduan Penelitian
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Informasi mengenai panduan layanan dan proses yang perlu Anda
                ketahui sebelum mengajukan permohonan.
              </p>
              <a
                href="/panduan-perizinan-rekomendasi-penelitian"
                className="text-[#86B6F6] hover:underline flex items-center text-sm md:text-base"
              >
                Baca Selengkapnya{" "}
                <span className="ml-2">
                  <GoArrowRight />
                </span>
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
              <ImSearch className="w-16 h-16 mb-4 text-[#003285]" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Syarat Penelitian
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Perizinan Rekomendasi Penelitian Observasi, Skripsi, Tesis,
                Disertasi, Magang, PKL, PKN, KKN
              </p>
              <a
                href="/persyaratan-perizinan-rekomendasi-penelitian"
                className="text-[#86B6F6] hover:underline flex items-center text-sm md:text-base"
              >
                Baca Selengkapnya{" "}
                <span className="ml-2">
                  <GoArrowRight />
                </span>
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
              <FaRegCommentDots className="w-16 h-16 mb-4 text-[#003285]" />
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Layanan Konsultasi
              </h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">
                Dapatkan layanan konsultasi mengenai penelitian dan prosesnya.
              </p>
              <a
                href="/layanan-konsultasi-penelitian"
                className="text-[#86B6F6] hover:underline flex items-center text-sm md:text-base"
              >
                Baca Selengkapnya{" "}
                <span className="ml-2">
                  <GoArrowRight />
                </span>
              </a>
            </div>
            {/* <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
              <FaRegCommentDots className="w-20 h-20 mb-4 text-[#2A629A]" />
              <h3 className="text-2xl font-semibold mb-2">Testimoni Layanan</h3>
              <p className="text-gray-600 mb-4">
                Baca testimoni dari pengguna layanan kami dan bagaimana kami
                membantu mereka.
              </p>
              <a
                href="/testimoni-layanan-rekomendasi-penelitian"
                className="text-[#86B6F6] hover:underline flex items-center"
              >
                Baca Selengkapnya{" "}
                <span className="ml-2">
                  <GoArrowRight />
                </span>
              </a>
            </div> */}
            {/* <div className="bg-white p-8 rounded-lg shadow-xl flex flex-col items-center md:items-start text-center md:text-left transition-transform duration-300 ease-in-out transform hover:scale-105">
              <FaArrowsDownToPeople className="w-20 h-20 mb-4 text-[#2A629A]" />
              <h3 className="text-2xl font-semibold mb-2">Pusat Bantuan</h3>
              <p className="text-gray-600 mb-4">
                Temukan jawaban dari pertanyaan umum dan bantuan lainnya.
              </p>
              <a
                href="/pusat-bantuan"
                className="text-[#86B6F6] hover:underline flex items-center"
              >
                Baca Selengkapnya{" "}
                <span className="ml-2">
                  <GoArrowRight />
                </span>
              </a>
            </div> */}
          </div>
        </div>
      </div>

      {/* Search Questions Section */}
      <div className="bg-[#EEF5FF] pb-16">
        <div
          className="text-center mb-20 p-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${FAQBackground})`,
          }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Pertanyaan yang Sering Diajukan
          </h2>
          {/* <p className="text-gray-500 text-base font-medium">
            Punya pertanyaan? Kami di sini untuk membantu Anda.
          </p> */}
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Temukan jawaban dari pertanyaan yang sering diajukan mengenai
            layanan kami.
          </p>
          <input
            type="text"
            placeholder="Cari pertanyaan..."
            className="mt-4 p-2 w-full max-w-lg border-2 border-[#86B6F6] focus:border-[#2A629A] rounded-full focus:outline-none pl-4 text-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* FAQ Section */}
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FAQ
                  key={index}
                  icon={faq.icon}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center col-span-1 md:col-span-2 lg:col-span-3">
                <iframe
                  src="https://lottie.host/embed/4a3394e0-e810-4308-a6ed-8e6b8e27c074/u5FXJGkSUr.json"
                  width="400"
                  height="350"
                  title="Search Not Found Animation"
                ></iframe>
                <p className="text-base md:text-lg font-medium text-gray-700 text-center">
                  Pencarian pertanyaan tidak ditemukan.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ScrollUp Button */}
      <ScrollUp />

      {/* Footer Section */}
      <Footer />
    </>
  );
}
