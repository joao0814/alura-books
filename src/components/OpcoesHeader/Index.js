import * as S from "./styles";

export default function OpcoesHeader({ text }) {
  return (
    <S.UlContainer>
      {text.map((text, index) => (
        <S.LiContainer key={index}>{text}</S.LiContainer>
      ))}
    </S.UlContainer>
  );
}
