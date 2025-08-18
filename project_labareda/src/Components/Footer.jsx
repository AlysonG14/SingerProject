import React from "react";
import styles from "./Footer.module.css";
import { SiApplemusic } from "react-icons/si";

export function Footer() {
  return (
    <footer>
      <p>Criado por: Alyson Pereira dos santos</p>
      <p>© Labareda - 2020</p>
      <SiApplemusic size={50} color="white" />
    </footer>
  );
}

export default Footer;
