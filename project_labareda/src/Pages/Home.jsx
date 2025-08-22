import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import ImagemLabareda from "../assets/labareda02.png";
import SuelenImg from "../assets/Suelen.png";
import JeffersonImg from "../assets/Jefferson.png";

function Artista({nome, imagemAtor, idade, descricao, altImg}) {
  return (
        <div className="grid grid-cols-2 items-center justify-center">
        <figure className="bg-[#5B21B6] text-white p-5">

          <img src={imagemAtor} alt={altImg}></img>
          <figcaption>
            <h2>{nome}</h2>
            <h3>{idade}</h3>
            <p>{descricao}</p>
          </figcaption>
        </figure>
        
        </div>
  );
}

export function Home() {
  return (
    <main className="bg-amber-50 ">
      <Header />
      <section className="grid font-semibold text-white justify-center text-4xl text-center gap-6 w-full shadow-xl p-8 bg-[#5B21B6] ">
        <h1>Gospel</h1>
      </section>

      <section className="grid grid-cols-2 gap-10 items-center-safe text-xl text-center bg-amber-50 m-10 p-5 shadow-xl">
        <p>
          <h2 className="font-semibold">Labareda</h2>
          A história da música <strong>'Labareda'</strong>, que foi interpretada pela dupla
          Jefferson & Suellen, é uma expressão de fé e espiritualidade
          profundamente enraizada na igreja cristã. A letra ela faz uma
          referência sobre o Pentescostes, que foi descrito no livro de Atos dos
          Apóstolos.
        </p>
        <figure className="font-semibold inset-0 text-2xl w-fit p-3 text-center bg-amber-500 rounded-xl cursor-pointer text-black ">
        <iframe className="rounded-xl" width="660" height="415" src="https://www.youtube.com/embed/LyDFyrgW7yQ?si=Dh8dNV6DD3965IxL&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </figure>
      </section>

      <section className="grid items-center justify-center-safe font-semibold text-3xl shadow-xl text-white p-8 mb-30 mt-30 bg-[#5B21B6]">
        <h1>Origem da música</h1>
      </section>
      <section className="grid grid-cols-2 text-center items-center text-xl m-8 shadow-xl p-8">
        <figure className="bg-amber-500 w-fit p-4 rounded-xl inset-0 shadow-xl">
         <img className="rounded-xl" src={ImagemLabareda} width={600} height={400} alt="Imagem da Música 02"></img>
        </figure>
        <div className="">
          <p>
            O significado da música 'Vem como labareda de fogo' é um pedido para
            que essa mesma energia e poder divinos se manifestam nos dias atuais,
            tocando os corações e as almas dos crentes. Ela conta sobre um desejo
            ardente por uma inspiração espiritual intensa e transformadora. Labareda 
            é uma música que, além de seu religioso significado, busca conectar os
            fiéis com uma sensação de comunidade e propósito compartilhado
            para conectar mais com Deus e ter fé, recebendo a graça divina e ser
            em transformado pelo 'fogo' do <strong> Espírito Santo. </strong>
          </p>
        </div>
      </section>

      <section className="bg-[#5B21B6] items-center grid justify-center font-semibold text-white p-8 text-3xl shadow-xl mb-30 mt-30">
        <h2>Artistas</h2>
      </section>


      <section className="grid shadow-xl m-8 p-5 grid-cols-2 items-center">

      <Artista 
      imagemAtor={JeffersonImg}
      nome="Jefferson" 
      idade="29"
      descricao="Jefferson começou sua caminhada musical no meio cristão compondo canções autorais. É conhecido por letras profundas, com foco na adoração e intimidade com Deus. Além de cantar, ele também prega e ministra em eventos e igrejas pelo país."
      />

      <Artista
      imagemAtor={SuelenImg}
      nome="Suelen"
      idade="24"
      descricao="Suellen começou a cantar ainda jovem, dentro da igreja, e mais tarde uniu seu talento vocal ao de Jefferson, com quem se casou. Tornou-se conhecida pela potência vocal e entrega nas ministrações."
      />

      </section>

      <Footer />

    </main>
  );
}

export default Home;
