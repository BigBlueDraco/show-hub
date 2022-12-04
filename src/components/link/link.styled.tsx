import { Link } from "react-router-dom";
import styled from "styled-components";

interface IStyledLink {
  button?: boolean;
  primary?: boolean;
}
export const StyledLink = styled(Link)<IStyledLink>`
  ${({
    button,
    primary,
    theme: {
      colors: { background, text, accent },
    },
  }) =>
    button &&
    `
    display: flex;
    justify-content: center;
    align-items: center;  
    border-radius: 35px;
        border-color: transparent;
        transition: transform 1s;
        cursor: pointer;
        min-width: 230px;
        min-height: 50px;
    &:hover,
    &:focus {
      transform: scale(1.1);
      box-shadow: 0px 3px 5px 0px
        ${accent.primaryHover};
    }
    ${
      primary
        ? `${background.primaryButton + text.primaryButton}`
        : `${background.seconderyButton + text.seconderyButton}`
    }`};
`;
