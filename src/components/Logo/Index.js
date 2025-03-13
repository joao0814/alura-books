import logo from "../../imagens/logo.svg";
import * as S from "./styles";

export default function Logo() {
  return (
    <S.LogoContainer>
      <S.ImageContainer src={logo} alt="Logo em laranja" />
      <p>
        <strong>Alura</strong>Books
      </p>
    </S.LogoContainer>
  );
}
