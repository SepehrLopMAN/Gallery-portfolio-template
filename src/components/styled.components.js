import styled, { css } from "styled-components";

export const Pane = styled.div`
  background: url("${({ sourceImage }) => sourceImage}") no-repeat center;
    grid-area: ${({ area }) => area ?? "auto"};
    background-size: ${({ bgSize }) => bgSize ?? "cover"};
    ${({ bgPosition }) =>
      bgPosition &&
      css`
        background-position: ${bgPosition};
      `}
}
`;

export const DetailsParagraph = styled.p`
  color: #aba8a9;
  font: 600 1.125rem Drugs;
`;

export const HeadingTitle = styled.h1`
  color: white;
  font-family: Dream Avenue;
  text-transform: uppercase;
  font-size: 4.375rem;
  font-weight: 100;
`;
