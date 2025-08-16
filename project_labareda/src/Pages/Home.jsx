import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import ImagemLabareda01 from "../assets/labareda01.jpg";
import ImagemLabareda02 from "../assets/labareda02.png";

function Artista(props) {
  return (
    <section>
      <img src={props.img} alt={props.altImg}></img>
      <h2>{props.nome}</h2>
      <h3>{props.carreira}</h3>
      <p>{props.descricao}</p>
    </section>
  );
}

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
        <img src={ImagemLabareda01} alt="Imagem da Música 01"></img>
        <p>
          A história da música 'Labareda', que foi interpretada pela dupla
          Jefferson & Suellen, é uma expressão de fé e espiritualidade
          profundamente enraizada na igreja cristã. A letra ela faz uma
          referência sobre o Pentescostes, que foi descrito no livro de Atos dos
          Apóstolos.
        </p>
      </section>

      <section>
        <img src={ImagemLabareda02} alt="Imagem da Música 02"></img>
        <p>
          O significado da música 'Vem como labareda de fogo' é um pedido para
          que essa mesma energia e poder divinos se manifestam nos dias atuais,
          tocando os corações e as almas dos crentes. Ela conta sobre um desejo
          ardente por uma inspiração espiritual intensa e transformadora. Labar
          eda é uma música que, além de seu religioso significado, busca conect
          ar os fiéis com uma sensação de comunidade e propósito compartilhado
          para conectar mais com Deus e ter fé, recebendo a graça divina e ser
          em transformado pelo 'fogo' do <strong> Espírito Santo </strong>
        </p>
      </section>

      <h2>Artistas Disponíveis</h2>

      <section>
        <figure>
          <img src={<Artista img="" />} />
          <figcaption>
            <Artista nome="Jefferson" idade="" descricao="" />
          </figcaption>
        </figure>

        <figure>
          <img src={<Artista img="" />} />
          <figcaption>
            <Artista nome="Suellen" idade="" descricao="" />
          </figcaption>
        </figure>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
