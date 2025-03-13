import styled from "styled-components";

export const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  text-align: center;
  padding 85px 0;
  height: 270vh;
  width: 100%;
  margim-bottom: 20px;
  `;

export const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

export const SubTitulo = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  margim-bottom: 0 40px;
`;

export const ContainerLivro = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margim-bottom: 20px;
  cursor: pointer;

  p {
    width: 200px;
  }

  img {
    width: 100px;
  }

  &:hover {
    border: 1px solid white;
  }
`;
