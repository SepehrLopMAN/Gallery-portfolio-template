import styled from "styled-components";
import styles from "./styled.components.module.css";

export const Pane = styled.div`
  background: url("${({ sourceImage }) => sourceImage}") no-repeat center;
    grid-area: ${({ area }) => area || "auto"};
    background-size: ${({ bgSize }) => bgSize || "cover"};
    background-position: ${({ bgPosition }) => bgPosition};
}
`;

export const DetailsParagraph = styled.p.attrs({
  className: styles["details--paragraph"],
})``;

export const HeadingTitle = styled.h1.attrs(({ className }) => {
  return {
    className: `${styles["heading-title"]} ${className}`,
  };
})``;
