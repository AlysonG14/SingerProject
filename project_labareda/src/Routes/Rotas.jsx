import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Header } from "../Components/Header";
import { Discografia } from "../Pages/Discografia";
import { Ranking } from "../Pages/Ranking";

export function Rotas() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/inicio/discografia/" element={<Discografia />} />
          <Route path="/inicio/ranking/" element={<Ranking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
