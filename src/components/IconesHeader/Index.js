import { LiContainer, UlContainer } from "./styles";

export default function IconesHeader({ icon }) {
  return (
    <UlContainer className="icones">
      {icon.map((icon) => (
        <LiContainer className="icone">
          <img src={icon}></img>
        </LiContainer>
      ))}
    </UlContainer>
  );
}
