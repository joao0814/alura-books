import { InputStyle } from "./styles";

export default function Input({ type, value, onBlur, placeholder }) {
  return (
    <div>
      <InputStyle
        type={type}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
}
