import { useState } from "react";
import Input from "../Input";
import { PesquisaContainer, SubTitulo, Titulo } from "./styles";
import { livros } from "./dadosPesquisa";

export default function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState(livros);

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
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

      {/* <div>
        {livrosPesquisados.map((livros) => (
          <div key={livros.id}>
            <img src={livros.src} alt={livros.name} />
          </div>
        ))}
      </div> */}
    </PesquisaContainer>
  );
}
