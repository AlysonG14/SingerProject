import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import Album01 from "../assets/labareda01.jpg";
import Album02 from "../assets/eleReina.jpg";
import Album03 from "../assets/saudadeCasa.jpg";
import Album04 from "../assets/noSilêncio.jpg";
import Album05 from "../assets/profetiza.jpg";
import Album06 from "../assets/jesusnoBarco.jpg";
import Album07 from "../assets/vemBuscar.jpg";
import Album08 from "../assets/seguraminhaMão.jpg";
import Album09 from "../assets/oEncontro.jpg";
import Album10 from "../assets/AcendeoutraVez.jpg";
import Album11 from "../assets/foinaCruz.jpg";
import Album12 from "../assets/cordeiroLeão.jpg";
import Album13 from "../assets/mostraGlória.jpg";
import Album14 from "../assets/eleVem.jpg";

{/* Adicionando os Componentes dos Albuns de cada um utilizando o método para chamar dentro da Página de Discografia*/}

const Albuns = ({ imagemAlbum, descricaoImagem, nome }) => { // Chamando os componentes pelo nome que descrevemos, dessa vez, vamos utilizar o Arrow Functions
  return (
    <figure className="w-fit h-fit rounded-2xl border-10 border-[#1F2937] font-semibold items-center-safe text-center bg-[#1F2937]">
      <img className="rounded-xl transition ease-in-out hover:scale-105" src={imagemAlbum} alt={descricaoImagem}></img>
      <p>{nome}</p>
    </figure>
  )
}

export function Discografia() {
  return (
    <div className="bg-[#5B21B6]">
      <Header />

      <div className="min-h-screen">

        <section className="bg-[#5B21B6] m-10 text-xl text-white min-h-screen">

          {/* Discografia Completa */}

          <div className="flex justify-center w-full bg-[#1F2937] rounded-xl text-2xl items-center-safe m-5 h-15 transition ease-in-out hover:scale-105">
            <h1>🎵 Discografia Completa (2020-2025)</h1>
          </div>

          {/* Mostrando todos os Álbuns Completos */}

          <div className="grid">
            <section className="flex gap-2 w-fit">
              <ul className="grid grid-cols-3 gap-10">
                <li>
                  <Albuns imagemAlbum={Album01}
                    descricaoImagem="Album 01"
                    nome="1- Labareda" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album02}
                    descricaoImagem="Album 02"
                    nome="2- Ele Reina" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album03}
                    descricaoImagem="Album 03"
                    nome="3- Saudade em casa" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album04}
                    descricaoImagem="Album 04"
                    nome="4- No Silêncio" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album05}
                    descricaoImagem="Album 05"
                    nome="5- Profetiza" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album06}
                    descricaoImagem="Album 06"
                    nome="6- Jesus no Barco" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album07}
                    descricaoImagem="Album 07"
                    nome="7- Vem me Buscar" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album08}
                    descricaoImagem="Album 08"
                    nome="8- Segura na Minha Mão" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album09}
                    descricaoImagem="Album 09"
                    nome="9- O Encontro" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album10}
                    descricaoImagem="Album 10"
                    nome="10- Acende Outra Vez" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album11}
                    descricaoImagem="Album 11"
                    nome="11- Foi na Cruz" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album12}
                    descricaoImagem="Album 12"
                    nome="12- Cordeiro e Leão" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album13}
                    descricaoImagem="Album 13"
                    nome="13- Mostra tua Glória" />
                </li>
                <li>
                  <Albuns imagemAlbum={Album14}
                    descricaoImagem="Album 14"
                    nome="14- Ele Vem" />
                </li>
              </ul>
            </section>
          </div>

        </section>

      </div>

      <Footer />
    </div>
  );
}

export default Discografia;
