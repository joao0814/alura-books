import * as S from "./styles";
import { livros } from "./dadosUltimosLancamentos";
import { useState } from "react";
import Titulo from "../Titulo";
import Card from "../Card";
import imageBook from "../../imagens/livro2.png";

export default function UltimoLancamentos() {
  const [lancamentos] = useState(livros);

  return (
    <S.LancamentosContainer>
      <Titulo text="Últimos lançamentos" color={"#eb9b00"} fontSize="36px" />
      <S.NovosLivrosContainer>
        {lancamentos.map((livro) => (
          <img src={livro.src} />
        ))}
      </S.NovosLivrosContainer>
      <Card
        title="Talvez você se interesse por"
        subtitle="Angular 11"
        description="Construindo uma aplicação com a plataforma Google"
        image={imageBook}
        buttonText="Comprar"
      ></Card>
    </S.LancamentosContainer>
  );
}
