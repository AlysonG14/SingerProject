import React from "react";
import imagemLogo from "../assets/logoMusica.png";
import { SiApplemusic } from "react-icons/si";
import { FaCircleUser } from "react-icons/fa6";

export function Header() {
  return (

    <header className="bg-orange-200 pb-3 border-b-2 border-orange-400">

      {/* Imagem da Logo */}

      <figure className="flex w-fit items-center justify-center">

        <img className="w-25 h-full p-4" src={imagemLogo} alt="Imagem da logo"></img>

      </figure>


      {/* Navegação */}

      <nav className="flex justify-end-safe items-center gap-15 ">

        <a onClick={(e) => {
          e.preventDefault;
          window.location.href = "/inicio/";}} href="#">Sobre a música</a>

        <a
          onClick={(e) => {
            e.preventDefault; 
            window.location.href = "/inicio/discografia/";}} href="#">Discografia
        </a>

        <a
          onClick={(e) => {
            e.preventDefault;
            window.location.href = "/inicio/ranking/";}} href="#">Ranking
        </a>

      </nav>
          {/* Ícones */}
            
          <section className="flex justify-end-safe">
        

            <SiApplemusic className="cursor-pointer" size={30} color="white" />

            <FaCircleUser className="cursor-pointer" size={30} color="white" />

          </section>
    

      
    </header>
  );
}
