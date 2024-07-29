import React from "react";
import { FaArrowsDownToPeople } from "react-icons/fa6";
import { ImSearch } from "react-icons/im";
import { GiHumanPyramid } from "react-icons/gi";
import { GoArrowRight } from "react-icons/go";
import { FaEnvelope, FaCreditCard, FaTimesCircle } from "react-icons/fa";
import Header from "./assets/Header.png";
import Bakesbangpol from "./assets/Logo Bakesbangpol.png";
import ScrollUp from "./ScrollUp";
import FAQ from "./FAQ";
import FAQBackground from "./assets/FAQ Background.png";
import Footer from "./Footer";

export default function Beranda() {
  const scrollToGridSection = () => {
    document
      .getElementById("grid-section")
      .scrollIntoView({ behavior: "smooth" });
  };

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
            <p className="text-gray-500 text-lg md:text-xl font-medium mb-6">
              Akses mudah dan cepat ke berbagai layanan yang disediakan oleh
              Badan Kesatuan Bangsa dan Politik Provinsi Jawa Timur
            </p>
            {/* <button
              onClick={scrollToGridSection}
              className="bg-[#2A629A] text-white font-medium px-4 py-2 rounded-full hover:bg-[#003285] transition duration-300 inline-block"
            >
              Kunjungi Laman
            </button> */}
            <button
              onClick={scrollToGridSection}
              className="border-2 border-[#003285] bg-transparent text-[#003285] font-medium px-4 py-2 rounded-full hover:bg-[#003285] hover:text-white transition duration-300 inline-block"
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

      {/* Grid Section */}
      <div id="grid-section" className="bg-[#EEF5FF] py-16">
        <div className="max-w-6xl mx-auto px-5 md:px-10">
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
      </div>

      {/* FAQ Section */}
      <div className="bg-[#EEF5FF] pb-16">
        <div
          className="text-center mb-20 p-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${FAQBackground})`,
          }}
        >
          <h2 className="text-3xl font-bold mb-2">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="text-gray-500 text-base font-medium">
            Punya pertanyaan? Kami di sini untuk membantu Anda.
          </p>
          <input
            type="text"
            placeholder="Cari di sini"
            className="mt-4 p-2 w-full max-w-lg border border-[#2A629A] rounded-lg"
          />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FAQ
              icon={<FaEnvelope className="w-10 h-10 mb-4 text-[#2A629A]" />}
              question="Dokumen apa saja yang diperlukan untuk mengajukan permohonan layanan?"
              answer="Dokumen yang diperlukan dapat bervariasi tergantung jenis layanan yang diajukan. Umumnya, Anda perlu menyiapkan KTP, surat permohonan resmi, dan dokumen pendukung lainnya sesuai dengan jenis layanan yang Anda butuhkan. Informasi lebih lanjut bisa ditemukan di website resmi Bakesbangpol Provinsi Jawa Timur."
            />
            <FAQ
              icon={<FaCreditCard className="w-10 h-10 mb-4 text-[#2A629A]" />}
              question="Berapa lama waktu yang dibutuhkan untuk memproses permohonan layanan?"
              answer="Waktu pemrosesan permohonan layanan dapat bervariasi tergantung pada jenis layanan dan kelengkapan dokumen yang diajukan. Biasanya, Anda akan menerima pemberitahuan mengenai status permohonan melalui email atau SMS dalam waktu beberapa hari kerja."
            />
            <FAQ
              icon={<FaTimesCircle className="w-10 h-10 mb-4 text-[#2A629A]" />}
              question="Apa yang harus saya lakukan jika ada masalah dengan permohonan saya?"
              answer="Jika Anda mengalami masalah dengan permohonan, Anda dapat menghubungi layanan pelanggan Bakesbangpol Provinsi Jawa Timur melalui kontak yang tersedia di website resmi atau datang langsung ke kantor Bakesbangpol untuk mendapatkan bantuan lebih lanjut."
            />
            <FAQ
              icon={<FaEnvelope className="w-10 h-10 mb-4 text-[#2A629A]" />}
              question="Di mana saya bisa menemukan informasi lebih lanjut mengenai program dan kegiatan Bakesbangpol Provinsi Jawa Timur?"
              answer="Informasi mengenai program dan kegiatan Bakesbangpol Provinsi Jawa Timur dapat ditemukan di website resmi Bakesbangpol, media sosial, dan publikasi resmi lainnya. Anda juga dapat mengunjungi kantor Bakesbangpol untuk mendapatkan informasi lebih lengkap."
            />
            <FAQ
              icon={<FaCreditCard className="w-10 h-10 mb-4 text-[#2A629A]" />}
              question="Apa saja layanan yang disediakan oleh Bakesbangpol Provinsi Jawa Timur?"
              answer="Bakesbangpol Provinsi Jawa Timur menyediakan berbagai layanan terkait kesatuan bangsa, politik, dan ketahanan masyarakat, seperti penerbitan izin organisasi masyarakat, koordinasi pemilu, sosialisasi kebijakan pemerintah, dan layanan pengaduan masyarakat."
            />
            <FAQ
              icon={<FaTimesCircle className="w-10 h-10 mb-4 text-[#2A629A]" />}
              question="Bagaimana cara menghubungi Bakesbangpol Provinsi Jawa Timur?"
              answer="Anda dapat menghubungi Bakesbangpol Provinsi Jawa Timur melalui telepon, email, atau datang langsung ke kantor Bakesbangpol. Informasi kontak lengkap dapat ditemukan di website resmi Bakesbangpol Provinsi Jawa Timur."
            />
          </div>
        </div>
      </div>

      {/* ScrollUp Button */}
      <ScrollUp />
      <Footer />
    </>
  );
}
