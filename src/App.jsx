import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./Beranda";
import SyaratPenelitian from "./SyaratPenelitian";
import FormulirPenelitian from "./FormulirPenelitian";
import FormulirMagang from "./FormulirMagang";
import TidakDitemukan from "./TidakDitemukan";

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
          path="/formulir-penelitian/survei/observasi/skripsi/tesis/desertasi"
          element={<FormulirPenelitian />}
        />
        <Route
          path="/formulir-magang/pkl/pkn/kkn"
          element={<FormulirMagang />}
        />
        <Route path="*" element={<TidakDitemukan />} />
      </Routes>
    </Router>
  );
}
