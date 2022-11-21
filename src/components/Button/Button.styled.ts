import styled from "styled-components";

interface IStyledButton {
  primary?: boolean;
}
export const StyledButton = styled("button")<IStyledButton>`
  min-width: 230px;
  min-height: 60px;
  border-radius: 35px;
  border-color: transparent;
  // font-size: 2px;
  // &:hover {
  //   transform: scale(1.05);
  // }
  transition: transform 2s;
  transition: box-shadow transform background 1s;
  &:hover,
  &:focus {
    // border-color: red;
    transform: scale(1.1);
    // color: #fff;
    // box-shadow: 0 0 20px 5px ${(p) => p.theme.colors.accent.primaryHover};
  }
  ${({ theme: { colors }, primary }) =>
    primary
      ? `${colors.background.primaryButton + colors.text.primaryButton}`
      : `${colors.background.seconderyButton + colors.text.seconderyButton}`}
`;
