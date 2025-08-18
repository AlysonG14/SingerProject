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
        <ul>

          <li><a href="#">Sobre a música</a></li>

          <li><a onClick={((e) => {
            e.preventDefault;
            window.location.href = "/inicio/discografia/";
          })} href="#">Discografia</a></li>

          <li><a onClick={((e) => {
            e.preventDefault;
            window.location.href = "/inicio/ranking/"
          })} href="#">Ranking</a></li>

        </ul>
        <SiApplemusic size={50} color="white" />
        <FaCircleUser size={50} color="white" />
      </nav>

    </header>
  );
}
