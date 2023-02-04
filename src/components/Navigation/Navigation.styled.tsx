import styled from "styled-components";

interface IStyledNavigation {}

export const StyledNavigation = styled("nav")<IStyledNavigation>`
  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 0;

  gap: 30px;
  ${({ theme: { media } }) =>
    media.tablet +
    `{
    gap: 35px;
  }` +
    media.desk +
    `{
      flex-direction: row;
      gap: 70px;
      align-items: flex-end;


    }`}
`;
