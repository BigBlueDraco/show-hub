import styled from "styled-components";

interface IStyledButton {
  primary?: boolean;
}
export const StyledButton = styled("button")<IStyledButton>`
  min-width: 230px;
  min-height: 60px;
  border-radius: 35px;
  border-color: transparent;
  transition: transform 2s;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 0px 3px 5px 0px
      ${({
        theme: {
          colors: { accent },
        },
      }) => accent.primaryHover};
  }
  ${({ theme: { colors }, primary }) =>
    primary
      ? `${colors.background.primaryButton + colors.text.primaryButton}`
      : `${colors.background.seconderyButton + colors.text.seconderyButton}`}
`;
