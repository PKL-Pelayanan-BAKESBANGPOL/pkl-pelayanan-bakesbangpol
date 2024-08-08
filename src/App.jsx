import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./Beranda";
import SyaratPenelitian from "./SyaratPenelitian";
import PanduanPenelitian from "./PanduanPenelitian";
import FormulirPenelitian from "./FormulirPenelitian";
import FormulirMagang from "./FormulirMagang";
import ProsesAjuan from "./ProsesAjuan";
import TidakDitemukan from "./TidakDitemukan";
import LayananKonsultasi from "./LayananKonsultasi";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route
          path="/persyaratan-perizinan-rekomendasi-penelitian"
          element={<SyaratPenelitian />}
        />
        <Route
          path="/panduan-perizinan-rekomendasi-penelitian"
          element={<PanduanPenelitian />}
        />
        <Route
          path="/layanan-konsultasi-penelitian"
          element={<LayananKonsultasi />}
        />
        <Route
          path="/formulir-penelitian/survei/observasi/skripsi/tesis/desertasi"
          element={<FormulirPenelitian />}
        />
        <Route
          path="/formulir-magang/pkl/pkn/kkn"
          element={<FormulirMagang />}
        />
        <Route path="/proses-ajuan" element={<ProsesAjuan />} />
        <Route path="*" element={<TidakDitemukan />} />
      </Routes>
    </Router>
  );
}
