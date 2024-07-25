import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Beranda from "./Beranda";
import Penelitian from "./Penelitian";
import FormulirPenelitian from "./FormulirPenelitian";
import FormulirMagang from "./FormulirMagang";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/persyaratan-penelitian" element={<Penelitian />} />
        <Route
          path="/formulir-penelitian/survei"
          element={<FormulirPenelitian />}
        />
        <Route
          path="/formulir-magang/pkl/pkn/kkn"
          element={<FormulirMagang />}
        />
      </Routes>
    </Router>
  );
}
