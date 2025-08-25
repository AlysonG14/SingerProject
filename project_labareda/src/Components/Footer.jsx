import React from "react";
import { SiApplemusic } from "react-icons/si";
import logoMusica from "../assets/logoMusica.png";

export function Footer() {
  return (

    <footer className="font-mono bg-orange-200 mt-5 p-2 flex justify-between items-center border-t-2 border-orange-400">

      {/* Texto  */}

      <section>

        <p>Criado por: <strong>Alyson Pereira dos santos </strong> </p>
        <p>© Labareda - 2020</p>

        {/* Imagem da logo */}

      
      </section>

      <figure className="flex flex-initial trasnsition duration-300 ease-in-out hover:scale-120">

        <img className="cursor-pointer w-20 h-full justify-end-safe pr-3" src={logoMusica} alt="Imagem da Logo"></img>

      </figure>

    </footer>
  );
}

export default Footer;
