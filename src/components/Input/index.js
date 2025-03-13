import * as S from "./styles";

export default function Input({ type, value, onBlur, placeholder }) {
  return (
    <div>
      <S.InputStyle
        type={type}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
}
