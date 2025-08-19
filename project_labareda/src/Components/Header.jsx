import React from "react";
import imagemLogo from "../assets/logoMusica.png";
import { SiApplemusic } from "react-icons/si";
import { FaCircleUser } from "react-icons/fa6";

export function Header() {
  return (
    <header className="m-2 bg-orange-200 content-center">
      <img className="w-25 h-20 p-2" src={imagemLogo} alt="Imagem da logo"></img>
      <nav className="flex justify-center gap-10 ">

        <a onClick={(e) => {
          e.preventDefault;
          window.location.href = "/inicio/";
        }} 
        href="#">Sobre a música</a>

        <a
          onClick={(e) => {
            e.preventDefault;
            window.location.href = "/inicio/discografia/";
          }}
          href="#"
        >
          Discografia
        </a>

        <a
          onClick={(e) => {
            e.preventDefault;
            window.location.href = "/inicio/ranking/";
          }}
          href="#"
        >
          Ranking
        </a>
        <div className="flex gap-5 m-2">
          <SiApplemusic className="jusfiy-end-safe" size={50} color="white" />
          <FaCircleUser className="jusfiy-end-safe" size={50} color="white" />
        </div>
      </nav>
    </header>
  );
}
