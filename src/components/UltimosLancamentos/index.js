import * as S from "./styles";
import { livros } from "./dadosUltimosLancamentos";
import { useState } from "react";
import Titulo from "../Titulo";

export default function UltimoLancamentos() {
  const [lancamentos] = useState(livros);

  return (
    <S.LancamentosContainer>
      <Titulo
        text="Últimos lançamentos"
        color={"#eb9b00"}
        tamanhoFonte="36px"
      />
      <S.NovosLivrosContainer>
        {lancamentos.map((livro) => (
          <img src={livro.src} />
        ))}
      </S.NovosLivrosContainer>
    </S.LancamentosContainer>
  );
}
