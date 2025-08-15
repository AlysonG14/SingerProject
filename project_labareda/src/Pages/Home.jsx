import React from "react";
import { personagem } from "./personagens";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import ImagemLabareda from "../assets/imagem-musica.jpg";

export function Home() {
  return (
    <div>
      <Header />
      <section>
        <h1>Gospel</h1>
        <h1>Melhores músicas já ouvidas</h1>
      </section>

      <section>
        <h2>Labareda</h2>
        <img src={ImagemLabareda} alt="Imagem da Música 01"></img>
        <p>
          A história da música 'Labareda', que foi interpretada pela dupla
          Jefferson & Suellen, é uma expressão de fé e espiritualidade
          profundamente enraizada na igreja cristã. A letra ela faz uma
          referência sobre o Pentescostes, que foi descrito no livro de Atos dos
          Apóstolos.
        </p>
      </section>

      <section>
        <img src={""} alt="Imagem da Música 02"></img>
        <p>
          O significado da música 'Vem como labareda de fogo' é um pedido para
          que essa mesma energia e poder divinos se manifestam nos dias atuais,
          tocando os cora ções e as almas dos crentes.
        </p>
      </section>

      <section>
        <figure>
          <img src={""} alt="Primeiro Artista"></img>
          <figcaption>{personagem.nome}</figcaption>
        </figure>

        <figure>
          <img src={""} alt="Segundo Artista"></img>
          <figcaption>{personagem.nome}</figcaption>
        </figure>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
