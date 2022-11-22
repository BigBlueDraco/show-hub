import styled from "styled-components";

interface IStyledNavigation {}

export const StyledNavigation = styled("nav")<IStyledNavigation>`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-grow: 0;
  gap: 70px;
`;
