import { useState } from "react";
import Input from "../Input";
import { livros } from "./dadosPesquisa";
import * as S from "./styles";
import Titulo from "../Titulo";

export default function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState(livros);

  return (
    <S.PesquisaContainer>
      <S.Titulo>"Já sabe por onde começar?"</S.Titulo>
      <S.SubTitulo>Encontre seu livro em nossa estante</S.SubTitulo>
      <Input
        type="text"
        onBlur={(e) => {
          const textoDigitado = e.target.value;
          // O filter percorre a lista de livros, verificando se o nome contém o texto digitado usando o includes.
          const resultadoPesquisa = livros.filter((livro) =>
            livro.name.includes(textoDigitado)
          );
          setLivrosPesquisados(resultadoPesquisa);
          console.log(resultadoPesquisa);
        }}
        placeholder={"Digite o  nome do livro"}
      />

      <div>
        {livrosPesquisados.map((livro) => (
          <S.ContainerLivro key={livro.id}>
            <img src={livro.src} alt={livro.name} />
            <S.SubTitulo>{livro.name}</S.SubTitulo>
          </S.ContainerLivro>
        ))}
      </div>
    </S.PesquisaContainer>
  );
}
