import * as S from "./style";
import Title from "../Titulo";

export default function Card({
  title,
  subtitle,
  description,
  image,
  buttonText,
}) {
  return (
    <S.CardContainer>
      <div>
        <Title>{title}</Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <S.Description>{description}</S.Description>
      </div>
      <div>
        <S.ImageBook src={image} />
        <S.Button>{buttonText}</S.Button>
      </div>
    </S.CardContainer>
  );
}
