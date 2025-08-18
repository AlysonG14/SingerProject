import React from "react";
import imagemLogo from "../assets/logoMusica.png";
import styles from "./Header.module.css";
import { SiApplemusic } from "react-icons/si";
import { FaCircleUser } from "react-icons/fa6";



export function Header() {
  return (
    <header className={styles.header_container}>
      <img className={styles.img} src={imagemLogo} alt="Imagem da logo"></img>
      <nav className={styles.nav_bar}>

          <a href="/inicio/">Sobre a música</a>

          <a onClick={((e) => {
            e.preventDefault;
            window.location.href = "/inicio/discografia/";
          })} href="#">Discografia</a>

          <a onClick={((e) => {
            e.preventDefault;
            window.location.href = "/inicio/ranking/"
          })} href="#">Ranking</a>

        <SiApplemusic size={50} color="white" />
        <FaCircleUser size={50} color="white" />
      </nav>

    </header>
  );
}
