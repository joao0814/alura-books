import logo from "../../imagens/logo.svg";
import { ImageContainer, LogoContainer } from "./styles";

export default function Logo() {
  return (
    <LogoContainer>
      <ImageContainer src={logo} alt="Logo em laranja" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </LogoContainer>
  );
}
