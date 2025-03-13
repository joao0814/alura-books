import { LiContainer, UlContainer } from "./styles";
import * as S from "./styles";

export default function IconesHeader({ icon }) {
  return (
    <S.UlContainer className="icones">
      {icon.map((icon) => (
        <S.LiContainer className="icone">
          <img src={icon}></img>
        </S.LiContainer>
      ))}
    </S.UlContainer>
  );
}
