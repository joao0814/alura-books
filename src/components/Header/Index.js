import Logo from "../Logo/Index";
import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import OpcoesHeader from "../OpcoesHeader/Index";
import IconesHeader from "../IconesHeader/Index";
import * as S from "./styles";

const textoOpcoes = ["Categorias", "Autores", "Livros", "Lojas"];
const icones = [perfil, sacola];

export default function Header() {
  return (
    <S.HeaderContainer>
      <Logo />
      <OpcoesHeader text={textoOpcoes} />
      <IconesHeader icon={icones} />
    </S.HeaderContainer>
  );
}
