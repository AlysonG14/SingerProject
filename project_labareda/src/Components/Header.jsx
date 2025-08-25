import React from "react";
import imagemLogo from "../assets/logoMusica.png";
import { SiApplemusic } from "react-icons/si";
import { FaCircleUser } from "react-icons/fa6";

export function Header() {
  return (

    <header className="flex justify-between bg-orange-200 pb-3 border-b-2 border-orange-400 ">

      {/* Imagem da Logo */}

      <figure className="flex w-fit items-center justify-center transition duration-300 ease-in-out hover:scale-120">

        <img className="w-25 h-full p-4 cursor-pointer" src={imagemLogo} alt="Imagem da logo"></img>

      </figure>


      {/* Navegação */}

      <nav className="flex mt-5 items-center gap-20 transition duration-300 ease-in-out hover:scale-120">

        <section className="duration-300 ease-in-out hover:scale-125">
          <a onClick={(e) => {
            e.preventDefault;
            window.location.href = "/";}} href="#">Sobre a música</a>
        </section>

        <section className="duration-300 ease-in-out hover:scale-125">
          <a
            onClick={(e) => {
              e.preventDefault; 
              window.location.href = "/discografia/";}} href="#">Discografia
          </a>
        </section>

        <section className="duration-300 ease-in-out hover:scale-125">
          <a
            onClick={(e) => {
              e.preventDefault;
              window.location.href = "/ranking/";}} href="#">Ranking
          </a>
        </section>

      </nav>
          {/* Ícones */}
            
          <section className="flex items-center mt-4 gap-15 mr-8">
        

            <SiApplemusic className="cursor-pointer transition duration-300 ease-in-out hover:scale-120" size={40} color="black" />

            <FaCircleUser className="cursor-pointer transition duration-300 ease-in-out hover:scale-120" size={40} color="black" />

          </section>
      
    </header>
  );
}
