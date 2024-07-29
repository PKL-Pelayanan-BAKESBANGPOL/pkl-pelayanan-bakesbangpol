import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./Beranda";
import Penelitian from "./Penelitian";
import FormulirPenelitian from "./FormulirPenelitian";
import FormulirMagang from "./FormulirMagang";
import ProsesAjuan from "./ProsesAjuan";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/persyaratan-penelitian" element={<Penelitian />} />
        <Route
          path="/formulir-penelitian/survei/observasi/skripsi/tesis/desertasi"
          element={<FormulirPenelitian />}
        />
        <Route
          path="/formulir-magang/pkl/pkn/kkn"
          element={<FormulirMagang />}
        />
        <Route path="/proses-ajuan" element={<ProsesAjuan />} />
      </Routes>
    </Router>
  );
}
