import * as S from "./styles";

export default function Titulo({ text, color, fontSize, align }) {
  return (
    <div>
      <S.Titulo color={color} fontSize={fontSize} alinhamento={align}>
        {text}
      </S.Titulo>
    </div>
  );
}
