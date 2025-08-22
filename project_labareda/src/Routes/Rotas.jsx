import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Discografia } from "../Pages/Discografia";
import { Ranking } from "../Pages/Ranking";

export function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discografia/" element={<Discografia />} />
          <Route path="/ranking/" element={<Ranking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
