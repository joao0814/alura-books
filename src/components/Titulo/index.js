import * as S from "./styles";

export default function Titulo({ text, color, tamanhoFonte, alinhamento }) {
  return (
    <div>
      <S.Titulo
        color={color}
        tamanhoFonte={tamanhoFonte}
        alinhamento={alinhamento}
      >
        {text}
      </S.Titulo>
    </div>
  );
}
