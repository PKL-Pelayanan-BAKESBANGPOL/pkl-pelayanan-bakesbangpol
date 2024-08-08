import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosArrowBack, IoMdArrowRoundBack } from "react-icons/io";
import toast from "react-hot-toast";
import FAQBackground from "./assets/FAQ Background.png";
import Footer from "./Footer";
import ScrollUp from "./ScrollUp";

export default function FormulirPenelitian() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const navigate = useNavigate();

  // State untuk field Nomor Surat
  const [letterNumber, setLetterNumber] = useState("");
  const [isLetterNumberTouched, setIsLetterNumberTouched] = useState(false);
  const [isLetterNumberValid, setIsLetterNumberValid] = useState(true);

  // State untuk field Nama Pemohon
  const [name, setName] = useState("");
  const [isNameTouched, setIsNameTouched] = useState(false);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isNameLengthValid, setIsNameLengthValid] = useState(true);

  // // State untuk field Nama Peneliti
  // const [researcherName, setResearcherName] = useState("");
  // const [isResearcherNameTouched, setIsResearcherNameTouched] = useState(false);
  // const [isResearcherNameValid, setIsResearcherNameValid] = useState(true);
  // const [isResearcherNameLengthValid, setIsResearcherNameLengthValid] =
  //   useState(true);

  // State untuk field Alamat Rumah
  const [address, setAddress] = useState("");
  const [isAddressTouched, setIsAddressTouched] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(true);
  const [isAddressLengthValid, setIsAddressLengthValid] = useState(true);

  // State untuk field No. Telepon/Alamat Email
  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);
  const [isInputValid, setIsInputValid] = useState(true);

  // State untuk field Perguruan Tinggi/Sekolah/Instansi/Lembaga
  const [institution, setInstitution] = useState("");
  const [isInstitutionTouched, setIsInstitutionTouched] = useState(false);
  const [isInstitutionValid, setIsInstitutionValid] = useState(true);
  const [isInstitutionLengthValid, setIsInstitutionLengthValid] =
    useState(true);

  // State untuk field Pekerjaan
  const [occupation, setOccupation] = useState("");
  const [isOccupationTouched, setIsOccupationTouched] = useState(false);
  const [isOccupationValid, setIsOccupationValid] = useState(true);

  // State untuk field Judul Magang/PKL/KKN
  const [judul, setJudul] = useState("");
  const [isJudulTouched, setIsJudulTouched] = useState(false);
  const [isJudulValid, setIsJudulValid] = useState(true);

  // // State untuk field Bidang Penelitian/Jurusan
  // const [researchField, setResearchField] = useState("");
  // const [isResearchFieldTouched, setIsResearchFieldTouched] = useState(false);
  // const [isResearchFieldValid, setIsResearchFieldValid] = useState(true);

  // State untuk Tujuan Permohonan
  const [tujuanPermohonan, setTujuanPermohonan] = useState("");

  // State untuk field Dosen Pembimbing/Penanggung Jawab
  const [supervisorName, setSupervisorName] = useState("");
  const [isSupervisorTouched, setIsSupervisorTouched] = useState(false);
  const [isSupervisorValid, setIsSupervisorValid] = useState(true);

  // State untuk field Anggota Tim Peneliti
  const [teamMembers, setTeamMembers] = useState("");
  const [isTeamMembersTouched, setIsTeamMembersTouched] = useState(false);
  const [isTeamMembersValid, setIsTeamMembersValid] = useState(true);

  // State untuk field Waktu Magang/PKL/KKN
  const [period, setPeriod] = useState("");
  const [isPeriodTouched, setIsPeriodTouched] = useState(false);
  const [isPeriodValid, setIsPeriodValid] = useState(true);

  // State untuk Status Permohonan
  const [statusPermohonan, setStatusPermohonan] = useState("");

  // State untuk field Lokasi Penelitian
  const [location, setLocation] = useState("");
  const [isLocationTouched, setIsLocationTouched] = useState(false);
  const [isLocationValid, setIsLocationValid] = useState(true);

  // State untuk field Melampirkan
  const [isSuratPengantarChecked, setIsSuratPengantarChecked] = useState(false);
  const [isProposalChecked, setIsProposalChecked] = useState(false);
  const [isKTPChecked, setIsKTPChecked] = useState(false);

  const [suratPengantarFile, setSuratPengantarFile] = useState(null);
  const [proposalFile, setProposalFile] = useState(null);
  const [ktpFile, setKtpFile] = useState(null);

  // Fungsi untuk menangani perubahan input Nomor Surat
  const handleLetterNumberChange = (e) => {
    const value = e.target.value;
    setLetterNumber(value);

    // Validasi "tidak boleh kosong" hanya jika field sudah pernah disentuh atau input kosong
    if (isLetterNumberTouched || value.trim() === "") {
      setIsLetterNumberValid(value.trim().length > 0);
    }
  };

  const handleLetterNumberFocus = () => {
    setIsLetterNumberTouched(true);
  };

  const handleLetterNumberBlur = () => {
    // Validasi ulang saat blur jika input kosong
    if (letterNumber.trim() === "") {
      setIsLetterNumberValid(false);
    }
  };

  // Fungsi untuk menangani perubahan input nama
  const handleNameChange = (e) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\d/g, ""); // Menghapus angka
    setName(sanitizedValue);
    setIsNameLengthValid(sanitizedValue.length >= 3);
    setIsNameValid(sanitizedValue.length > 0);
  };

  const handleNameFocus = () => {
    setIsNameTouched(true);
  };

  const handleNameBlur = () => {
    if (name.trim() === "") {
      setIsNameValid(false);
      setIsNameLengthValid(true); // Reset validasi panjang
    }
  };

  // // Fungsi untuk menangani perubahan input nama peneliti
  // const handleResearcherNameChange = (e) => {
  //   const value = e.target.value;
  //   const sanitizedValue = value.replace(/\d/g, ""); // Menghapus angka
  //   setResearcherName(sanitizedValue);
  //   setIsResearcherNameLengthValid(sanitizedValue.length >= 3);
  //   setIsResearcherNameValid(sanitizedValue.length > 0);
  // };

  // const handleResearcherNameFocus = () => {
  //   setIsResearcherNameTouched(true);
  // };

  // const handleResearcherNameBlur = () => {
  //   if (researcherName.trim() === "") {
  //     setIsResearcherNameValid(false);
  //     setIsResearcherNameLengthValid(true); // Reset validasi panjang
  //   }
  // };

  // Fungsi untuk menangani perubahan input alamat
  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    Pekerjaan;
    setIsAddressLengthValid(value.trim().length >= 10);
    setIsAddressValid(value.trim().length > 0);
  };

  const handleAddressFocus = () => {
    setIsAddressTouched(true);
  };

  // Fungsi untuk menangani blur pada input
  const handleAddressBlur = () => {
    if (address.trim() === "") {
      setIsAddressValid(false);
      setIsAddressLengthValid(true); // Reset validasi panjang
    } else {
      setIsAddressValid(true);
      setIsAddressLengthValid(address.trim().length >= 10);
    }
  };

  const handleInputFocus = () => {
    setIsInputTouched(true);
  };

  const handleInputBlur = () => {
    if (inputValue.trim() === "") {
      setIsInputValid(false);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    // Validate input only if the field has been touched
    if (isInputTouched) {
      setIsInputValid(value.trim().length > 0);
    }
  };

  // Fungsi untuk menangani perubahan input Perguruan Tinggi/Instansi/Lembaga
  const handleInstitutionChange = (e) => {
    const value = e.target.value;
    setInstitution(value);
    setIsInstitutionLengthValid(value.trim().length >= 10);

    // Validasi input berdasarkan nilai saat ini dan status diklik
    if (isInstitutionTouched || value.trim() === "") {
      setIsInstitutionValid(value.trim().length > 0);
    }
  };

  const handleInstitutionFocus = () => {
    setIsInstitutionTouched(true);
  };

  const handleInstitutionBlur = () => {
    setIsInstitutionTouched(false);
    // Validasi ulang pada blur jika inputnya kosong
    if (institution.trim() === "") {
      setIsInstitutionValid(false);
    }
  };

  const handleOccupationChange = (e) => {
    const value = e.target.value;
    setOccupation(value);

    // Validate input based on current value and touched status
    if (isOccupationTouched || value.trim() === "") {
      setIsOccupationValid(value.trim().length > 0);
    }
  };

  const handleOccupationFocus = () => {
    setIsOccupationTouched(true);
  };

  const handleOccupationBlur = () => {
    // Revalidate on blur if the input is empty
    if (occupation.trim() === "") {
      setIsOccupationValid(false);
    }
  };

  const handleJudulChange = (e) => {
    const value = e.target.value;
    setJudul(value);

    // Validate input based on current value and touched status
    if (isJudulTouched || value.trim() === "") {
      setIsJudulValid(value.trim().length > 0);
    }
  };

  const handleJudulFocus = () => {
    setIsJudulTouched(true);
  };

  const handleJudulBlur = () => {
    // Revalidate on blur if the input is empty
    if (judul.trim() === "") {
      setIsJudulValid(false);
    }
  };

  // const handleResearchFieldChange = (e) => {
  //   const value = e.target.value;
  //   setResearchField(value);

  //   // Validasi "tidak boleh kosong" hanya jika field sudah pernah disentuh atau input kosong
  //   if (isResearchFieldTouched || value.trim() === "") {
  //     setIsResearchFieldValid(value.trim().length > 0);
  //   }
  // };

  // const handleResearchFieldFocus = () => {
  //   setIsResearchFieldTouched(true);
  // };

  // const handleResearchFieldBlur = () => {
  //   // Validasi ulang saat blur jika input kosong
  //   if (researchField.trim() === "") {
  //     setIsResearchFieldValid(false);
  //   }
  // };

  // Fungsi untuk menangani perubahan pilihan Tujuan Penelitian
  const handleTujuanPermohonanChange = (e) => {
    setTujuanPermohonan(e.target.value);
  };

  // Fungsi untuk menangani perubahan input supervisorName
  const handleSupervisorChange = (e) => {
    const value = e.target.value;
    setSupervisorName(value);

    // Validasi "tidak boleh kosong" hanya jika field sudah pernah disentuh atau input kosong
    if (isSupervisorTouched || value.trim() === "") {
      setIsSupervisorValid(value.trim().length > 0);
    }
  };

  const handleSupervisorFocus = () => {
    setIsSupervisorTouched(true);
  };

  const handleSupervisorBlur = () => {
    // Validasi ulang saat blur jika input kosong
    if (supervisorName.trim() === "") {
      setIsSupervisorValid(false);
    }
  };

  // Fungsi untuk menangani perubahan input Anggota Tim Peneliti
  const handleTeamMembersChange = (e) => {
    const value = e.target.value;
    setTeamMembers(value);

    // Validasi input
    const isValid = value.trim() !== "" || value.trim() === "-";
    setIsTeamMembersValid(isValid);
  };

  // Fungsi untuk menangani fokus input
  const handleTeamMembersFocus = () => {
    setIsTeamMembersTouched(true);
  };

  // Fungsi untuk menangani blur input
  const handleTeamMembersBlur = () => {
    setIsTeamMembersTouched(false);
  };

  // Fungsi untuk menangani perubahan input Waktu Penelitian
  const handlePeriodChange = (e) => {
    const value = e.target.value;
    setPeriod(value);

    // Validasi "tidak boleh kosong" hanya jika field sudah pernah disentuh atau input kosong
    if (isPeriodTouched || value.trim() === "") {
      setIsPeriodValid(value.trim().length > 0);
    }
  };

  const handlePeriodFocus = () => {
    setIsPeriodTouched(true);
  };

  const handlePeriodBlur = () => {
    // Validasi ulang saat blur jika input kosong
    if (period.trim() === "") {
      setIsPeriodValid(false);
    }
  };

  // Fungsi untuk menangani perubahan pilihan Status Permohonan
  const handleStatusPermohonanChange = (e) => {
    setStatusPermohonan(e.target.value);
  };

  // Fungsi untuk menangani perubahan input Lokasi Penelitian
  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);

    // Validasi "tidak boleh kosong" hanya jika field sudah pernah disentuh atau input kosong
    if (isLocationTouched || value.trim() === "") {
      setIsLocationValid(value.trim().length > 0);
    }
  };

  const handleLocationFocus = () => {
    setIsLocationTouched(true);
  };

  const handleLocationBlur = () => {
    // Validasi ulang saat blur jika input kosong
    if (location.trim() === "") {
      setIsLocationValid(false);
    }
  };

  // Fungsi untuk menangani perubahan file
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    // Validasi ukuran file
    if (file && file.size > 5 * 1024 * 1024) {
      toast("Ukuran file tidak boleh lebih dari 5 MB!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "12px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    if (name === "suratPengantar") {
      setSuratPengantarFile(file);
      setIsSuratPengantarChecked(!!file);
    }
    if (name === "proposal") {
      setProposalFile(file);
      setIsProposalChecked(!!file);
    }
    if (name === "ktp") {
      setKtpFile(file);
      setIsKTPChecked(!!file);
    }
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi untuk setiap field
    if (!letterNumber) {
      toast("Mohon isi kolom nomor surat!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!name) {
      toast("Mohon isi kolom nama!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // // Validasi untuk setiap field
    // if (!researcherName) {
    //   toast("Mohon isi kolom nama peneliti!", {
    //     style: {
    //       background: "#FF0000",
    //       color: "#FFFFFF",
    //       borderRadius: "10px",
    //       fontSize: "14px",
    //       textAlign: "center",
    //       // padding: "10px 20px",
    //       width: "full",
    //       maxWidth: "900px",
    //     },
    //     position: "top-center",
    //     duration: 3000,
    //   });
    //   return;
    // }

    // Validasi untuk setiap field
    if (!address) {
      toast("Mohon isi kolom alamat rumah!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!inputValue) {
      toast("Mohon isi kolom no. telepon/alamat Email!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!institution) {
      toast("Mohon isi kolom Perguruan Tinggi/Instansi/Lembaga!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!occupation) {
      toast("Mohon isi kolom Pekerjaan!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!judul) {
      toast("Mohon isi kolom Judul Penelitian!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // // Validasi untuk setiap field
    // if (!researchField) {
    //   toast("Mohon isi kolom Bidang Penelitian/Jurusan!", {
    //     style: {
    //       background: "#FF0000",
    //       color: "#FFFFFF",
    //       borderRadius: "10px",
    //       fontSize: "14px",
    //       textAlign: "center",
    //       // padding: "10px 20px",
    //       width: "full",
    //       maxWidth: "900px",
    //     },
    //     position: "top-center",
    //     duration: 3000,
    //   });
    //   return;
    // }

    // Validasi untuk setiap field
    if (!tujuanPermohonan) {
      toast("Mohon pilih Tujuan Permohonan!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!supervisorName) {
      toast("Mohon isi kolom Dosen Pembimbing/Penanggung Jawab!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!teamMembers) {
      toast("Mohon isi kolom Anggota Tim Peneliti!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!period) {
      toast("Mohon isi kolom Waktu Magang/PKL/KKN!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!statusPermohonan) {
      toast("Mohon pilih Status Penelitian!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!location) {
      toast("Mohon isi kolom Lokasi Magang/PKL/KKN!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Validasi untuk setiap field
    if (!isSuratPengantarChecked || !isProposalChecked || !isKTPChecked) {
      toast("Mohon lengkapi semua lampiran yang diperlukan!", {
        style: {
          background: "#FF0000",
          color: "#FFFFFF",
          borderRadius: "10px",
          fontSize: "14px",
          textAlign: "center",
          // padding: "10px 20px",
          width: "full",
          maxWidth: "900px",
        },
        position: "top-center",
        duration: 3000,
      });
      return;
    }

    // Jika semua field valid, tampilkan toast sukses dan navigasi
    toast("Data Anda berhasil disimpan!", {
      style: {
        background: "#28A745",
        color: "#FFFFFF",
        borderRadius: "10px",
        fontSize: "14px",
        textAlign: "center",
        // padding: "10px 20px",
        width: "full",
        maxWidth: "900px",
      },
      position: "top-center",
      duration: 3000,
    });

    setTimeout(() => {
      navigate("/proses-ajuan"); // Navigasi ke halaman proses ajuan
    }, 3000);

    // Lakukan submit data ke server atau tindakan lainnya
    console.log("Data Pengguna Berhasil Disimpan!");
  };

  // Menggulir ke atas saat komponen dimuat
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#EEF5FF]">
      {/* Header Section */}
      <div
        className="text-center mb-5 p-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${FAQBackground})`,
        }}
      >
        <h2 className="text-2xl md:text-3xl font-bold">
          Ajuan Permohonan Rekomendasi Magang, Praktek Kerja Lapang, <br />
          Praktek Kerja Nyata, atau Kuliah Kerja Nyata
        </h2>
      </div>

      {/* Back Button */}
      <div className={`ml-5 pt-1 ${isMobile ? "mb-5" : "mb-10 lg:w-1/12"}`}>
        <Link to="/persyaratan-perizinan-rekomendasi-penelitian">
          <div className="flex font-medium items-center text-[#003285] hover:text-[#40A2E3] cursor-pointer">
            {isMobile ? (
              <IoMdArrowRoundBack className="text-2xl" />
            ) : (
              <>
                <IoIosArrowBack className="text-2xl" />
                <h6 className="text-base ml-1">Kembali</h6>
              </>
            )}
          </div>
        </Link>
      </div>

      {/* Mobile padding top */}
      {isMobile && <div className="pt-1"></div>}

      {/* Form Section */}
      <div
        className={`max-w-4xl mx-auto bg-white ${
          isMobile ? "p-6 mb-10" : "p-8 mb-20"
        } rounded-lg shadow-lg`}
      >
        <h3 className="text-lg md:text-xl font-bold mb-10">
          Formulir Permohonan Rekomendasi Magang/PKL/PKN/KKN Badan Kesatuan
          Bangsa dan Politik Provinsi Jawa timur
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium mb-1">
              Nomor Surat <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isLetterNumberValid &&
                  (isLetterNumberTouched || letterNumber.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Nomor Surat (Sesuai dengan Surat Pengantar dari Instansi)"
                value={letterNumber}
                onFocus={handleLetterNumberFocus}
                onBlur={handleLetterNumberBlur}
                onChange={handleLetterNumberChange}
              />
              {!isLetterNumberValid &&
                (isLetterNumberTouched || letterNumber.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isLetterNumberValid &&
              (isLetterNumberTouched || letterNumber.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Nomor surat tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Nama Pemohon <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isNameValid || !isNameLengthValid
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Nama Lengkap"
                value={name}
                onFocus={handleNameFocus}
                onBlur={handleNameBlur}
                onChange={handleNameChange}
              />
              {(!isNameValid || !isNameLengthValid) && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isNameValid && isNameTouched && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>Nama pemohon tidak boleh kosong</p>
              </div>
            )}
            {isNameTouched && name.trim() !== "" && !isNameLengthValid && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>Nama berisi minimal 3 huruf</p>
              </div>
            )}
          </div>

          {/* <div>
            <label className="block font-medium mb-1">
              Nama Peneliti (Sesuai dengan Surat Pengantar){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isResearcherNameValid || !isResearcherNameLengthValid
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Nama Peneliti"
                value={researcherName}
                onFocus={handleResearcherNameFocus}
                onBlur={handleResearcherNameBlur}
                onChange={handleResearcherNameChange}
              />
              {(!isResearcherNameValid || !isResearcherNameLengthValid) && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isResearcherNameValid && isResearcherNameTouched && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>Nama Peneliti tidak boleh kosong</p>
              </div>
            )}
            {isResearcherNameTouched &&
              researcherName.trim() !== "" &&
              !isResearcherNameLengthValid && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Nama Peneliti harus berisi minimal 3 huruf</p>
                </div>
              )}
          </div> */}

          <div>
            <label className="block font-medium mb-1">
              Alamat Rumah (Sesuai dengan KTP, sertakan RT, RW, Kelurahan,
              Kecamatan, dan Kota)
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  (!isAddressValid || !isAddressLengthValid) && isAddressTouched
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Contoh: JL. Melati V/20 RT. 005 RW. 010 Kel. Bunga Kec. Gading Kota Kembang"
                value={address}
                onFocus={handleAddressFocus}
                onBlur={handleAddressBlur}
                onChange={handleAddressChange}
              />
              {(!isAddressValid || !isAddressLengthValid) &&
                isAddressTouched && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isAddressValid && isAddressTouched && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>Alamat tidak boleh kosong</p>
              </div>
            )}
            {isAddressTouched &&
              address.trim() !== "" &&
              !isAddressLengthValid && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Alamat berisi minimal 10 karakter</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              No. Telepon/Alamat Email <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isInputValid && isInputTouched
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="No. Telepon/Alamat Email"
                value={inputValue}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                onChange={handleInputChange}
              />
              {!isInputValid && isInputTouched && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isInputValid && isInputTouched && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>No. Telepon/Alamat Email tidak boleh kosong</p>
              </div>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Perguruan Tinggi/Sekolah/Instansi/Lembaga{" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  (!isInstitutionValid || !isInstitutionLengthValid) &&
                  (isInstitutionTouched || institution.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Perguruan Tinggi/Sekolah/Instansi/Lembaga"
                value={institution}
                onFocus={handleInstitutionFocus}
                onBlur={handleInstitutionBlur}
                onChange={handleInstitutionChange}
              />
              {(!isInstitutionValid || !isInstitutionLengthValid) && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isInstitutionValid &&
              (isInstitutionTouched || institution.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>
                    Perguruan Tinggi/Sekolah/Instansi/Lembaga tidak boleh kosong
                  </p>
                </div>
              )}
            {isInstitutionTouched &&
              institution.trim() !== "" &&
              !isInstitutionLengthValid && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>
                    Perguruan Tinggi/Sekolah/Instansi/Lembaga berisi minimal 10
                    huruf
                  </p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Pekerjaan (Diisi sesuai dengan KTP){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isOccupationValid &&
                  (isOccupationTouched || occupation.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Contoh: Pelajar/Mahasiswa"
                value={occupation}
                onFocus={handleOccupationFocus}
                onBlur={handleOccupationBlur}
                onChange={handleOccupationChange}
              />
              {!isOccupationValid &&
                (isOccupationTouched || occupation.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isOccupationValid &&
              (isOccupationTouched || occupation.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Pekerjaan tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Judul Magang/PKL/KKN <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isJudulValid && (isJudulTouched || judul.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Judul Magang/PKL/KKN"
                value={judul}
                onFocus={handleJudulFocus}
                onBlur={handleJudulBlur}
                onChange={handleJudulChange}
              />
              {!isJudulValid && (isJudulTouched || judul.trim() === "") && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isJudulValid && (isJudulTouched || judul.trim() === "") && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>Judul Magang/PKL/KKN tidak boleh kosong</p>
              </div>
            )}
          </div>

          {/* <div>
            <label className="block font-medium mb-1">
              Bidang Penelitian (Jurusan){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isResearchFieldValid &&
                  (isResearchFieldTouched || researchField.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Bidang Penelitian (Jurusan)"
                value={researchField}
                onFocus={handleResearchFieldFocus}
                onBlur={handleResearchFieldBlur}
                onChange={handleResearchFieldChange}
              />
              {!isResearchFieldValid &&
                (isResearchFieldTouched || researchField.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isResearchFieldValid &&
              (isResearchFieldTouched || researchField.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Bidang Penelitian (Jurusan) tidak boleh kosong</p>
                </div>
              )}
          </div> */}

          <div>
            <label className="block font-medium mb-1">
              Tujuan Permohonan <span className="text-[#FF0000]">*</span>
            </label>
            <div className="flex space-x-4 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#2A629A] border-gray-300"
                  name="tujuanPermohonan"
                  value="Magang"
                  onChange={handleTujuanPermohonanChange}
                />
                <span className="ml-2 text-sm text-gray-900">Magang</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#2A629A] border-gray-300"
                  name="tujuanPermohonan"
                  value="Praktek Kerja Lapang (PKL)"
                  onChange={handleTujuanPermohonanChange}
                />
                <span className="ml-2 text-sm text-gray-900">
                  Praktek Kerja Lapang (PKL)
                </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#2A629A] border-gray-300"
                  name="tujuanPermohonan"
                  value="Kuliah Kerja Nyata (KKN)"
                  onChange={handleTujuanPermohonanChange}
                />
                <span className="ml-2 text-sm text-gray-900">
                  Kuliah Kerja Nyata (KKN)
                </span>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Dosen Pembimbing/Penanggung Jawab{" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isSupervisorValid &&
                  (isSupervisorTouched || supervisorName.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Nama Lengkap beserta Gelar"
                value={supervisorName}
                onFocus={handleSupervisorFocus}
                onBlur={handleSupervisorBlur}
                onChange={handleSupervisorChange}
              />
              {!isSupervisorValid &&
                (isSupervisorTouched || supervisorName.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isSupervisorValid &&
              (isSupervisorTouched || supervisorName.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Dosen Pembimbing/Penanggung Jawab tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Anggota Tim Magang/PKL/KKN (Bila Tidak Ada, Isi dengan "-"){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isTeamMembersValid && isTeamMembersTouched
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Nama Lengkap Anggota Tim Peneliti"
                value={teamMembers}
                onFocus={handleTeamMembersFocus}
                onBlur={handleTeamMembersBlur}
                onChange={handleTeamMembersChange}
              />
              {!isTeamMembersValid && isTeamMembersTouched && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isTeamMembersValid && isTeamMembersTouched && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>
                  Anggota Tim Magang/PKL/KKN tidak boleh kosong atau hanya
                  berisi tanda '-'
                </p>
              </div>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Waktu Magang/PKL/KKN (Sertakan Tanggal, Bulan, dan Tahun){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isPeriodValid && (isPeriodTouched || period.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Contoh: 20 Agustus 2024 - 20 Desember 2024"
                value={period}
                onFocus={handlePeriodFocus}
                onBlur={handlePeriodBlur}
                onChange={handlePeriodChange}
              />
              {!isPeriodValid && (isPeriodTouched || period.trim() === "") && (
                <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
              )}
            </div>
            {!isPeriodValid && (isPeriodTouched || period.trim() === "") && (
              <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                <p>Waktu Magang/PKL/KKN tidak boleh kosong</p>
              </div>
            )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Status Permohonan <span className="text-[#FF0000]">*</span>
            </label>
            <div className="flex space-x-4 mt-2">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#2A629A] border-gray-300"
                  name="statusPermohonan"
                  value="Baru"
                  onChange={handleStatusPermohonanChange}
                />
                <span className="ml-2 text-sm text-gray-900">Baru</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-[#2A629A] border-gray-300"
                  name="statusPermohonan"
                  value="Perpanjangan"
                  onChange={handleStatusPermohonanChange}
                />
                <span className="ml-2 text-sm text-gray-900">Perpanjangan</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">
              Lokasi Magang/PKL/KKN (Instansi/Mitra/Lembaga/Sekolah){" "}
              <span className="text-[#FF0000]">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full bg-transparent border-b-2 text-sm text-gray-900 py-2 px-0 focus:outline-none focus:ring-0 ${
                  !isLocationValid &&
                  (isLocationTouched || location.trim() === "")
                    ? "border-[#FF0000]"
                    : "border-gray-300 focus:border-[#2A629A]"
                }`}
                placeholder="Lokasi Penelitian"
                value={location}
                onFocus={handleLocationFocus}
                onBlur={handleLocationBlur}
                onChange={handleLocationChange}
              />
              {!isLocationValid &&
                (isLocationTouched || location.trim() === "") && (
                  <RxCrossCircled className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#FF0000] w-[20px] h-[20px] mr-2" />
                )}
            </div>
            {!isLocationValid &&
              (isLocationTouched || location.trim() === "") && (
                <div className="flex items-center text-[#FF0000] text-xs mt-1 text-left">
                  <p>Lokasi Magang/PKL/KKN tidak boleh kosong</p>
                </div>
              )}
          </div>

          <div>
            <label className="block font-medium mb-1">
              Melampirkan: <span className="text-[#FF0000]">*</span>
            </label>
            <div className="space-y-2">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-2 md:mb-0">
                  <input
                    type="checkbox"
                    name="suratPengantar"
                    className="form-checkbox mr-2"
                    checked={isSuratPengantarChecked}
                    readOnly
                  />
                  <span className="text-sm">
                    Surat Pengantar Instansi/Lembaga
                  </span>
                </div>
                <input
                  type="file"
                  name="suratPengantar"
                  className="form-file-input w-full md:w-2/5 text-sm"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-2 md:mb-0">
                  <input
                    type="checkbox"
                    name="proposal"
                    className="form-checkbox mr-2"
                    checked={isProposalChecked}
                    readOnly
                  />
                  <span className="text-sm">Proposal</span>
                </div>
                <input
                  type="file"
                  name="proposal"
                  className="form-file-input w-full md:w-2/5 text-sm"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-center mb-2 md:mb-0">
                  <input
                    type="checkbox"
                    name="ktp"
                    className="form-checkbox mr-2"
                    checked={isKTPChecked}
                    readOnly
                  />
                  <span className="text-sm">
                    <span className="italic">Foto copy</span> KTP/Identitas
                    (Seluruh Anggota)
                  </span>
                </div>
                <input
                  type="file"
                  name="ktp"
                  className="form-file-input w-full md:w-2/5 text-sm"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            </div>
          </div>

          <div className="text-end">
            <button
              type="submit"
              className="mt-4 bg-[#2A629A] text-white text-sm md:text-base font-medium px-5 py-2 rounded-full hover:bg-[#003285] transition duration-300"
            >
              Kirim Data
            </button>
          </div>
        </form>
      </div>

      {/* ScrollUp Button */}
      {/* {isMobile ? "" : <ScrollUp />} */}
      <ScrollUp />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
