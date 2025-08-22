import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { SiApplemusic } from "react-icons/si";
import { FaSpotify } from "react-icons/fa";
import { FaItunes } from "react-icons/fa";


export function Ranking() {
  return (
    <div className="bg-[#5B21B6]">
      <Header />
    <main className="min-h-screen bg-[#5B21B6] text-white m-5 mt-70">
      <div className="flex justify-center">
        <section className="bg-[#1F2937] grid w-250 grid-cols-2 rounded-xl p-5 text-center text-xl">
            <h1>Rankings em Plataformas</h1>
            <p>Melhor Posição</p>
          
          <div className="border border-[#5B21B6] bg-[#111827]">

            <section className="p-4 gap-10 border-b-1 flex justify-center-safe border-[#5B21B6]">
              <p><FaItunes className="ml-1.5 transition ease-in-out duration-200 hover:scale-110" size={40} /> Itunes </p>
            </section>

            <section className="p-4 border-b-1 gap-10 flex justify-center-safe border-[#5B21B6]">
              <p> <SiApplemusic className="ml-10 transition ease-in-out duration-200 hover:scale-110" size={30} /> Apple Music</p>
            </section>

            <section className="p-4 border-b-1 gap-10 flex justify-center-safe border-[#5B21B6]">
              <p> <FaSpotify className="ml-4 transition ease-in-out duration-200 hover:scale-110" size={30} color="green" /> Spotify</p>
            </section>

          </div>

          <div className="border border-[#5B21B6] bg-[#111827]">

            <section className="p-9 gap-10 border-b-1 flex justify-center-safe border-[#5B21B6]">
              <p> #43 no Top Charts  </p>
            </section>

            <section className="p-8 pb-7.5 border-b-1 gap-10 flex justify-center-safe border-[#5B21B6]">
              <p> #9 no Ranking de Singles </p>
            </section>

            <section className="p-8 border-b-1 gap-10 flex justify-center-safe text-[#00B06D] border-[#5B21B6]">
              <p> 4° Mais Popular na Dupla </p>
            </section>

          </div>
          
        </section>
      </div>
    </main>
      <Footer />
    </div>
  );
}

export default Ranking;
