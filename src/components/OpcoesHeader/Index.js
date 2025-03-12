import { LiContainer, UlContainer } from "./styles";

export default function OpcoesHeader({ text }) {
  return (
    <UlContainer>
      {text.map((text, index) => (
        <LiContainer key={index}>{text}</LiContainer>
      ))}
    </UlContainer>
  );
}
