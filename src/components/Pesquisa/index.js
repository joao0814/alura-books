import { useState } from "react";
import Input from "../Input";
import { PesquisaContainer, SubTitulo, Titulo } from "./styles";

export default function Pesquisa() {
  const [valor, setValor] = useState("");

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
      <Input
        type="text"
        onBlur={(e) => setValor(e.target.value)}
        placeholder={"Digite o nome do livro"}
      />
      <p>{valor}</p>
    </PesquisaContainer>
  );
}
