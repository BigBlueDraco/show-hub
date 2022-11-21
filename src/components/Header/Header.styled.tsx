import styled from "styled-components";

interface IStyledHeader {}
export const StyledHeader = styled("header")<IStyledHeader>`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0px;
  gap: 114px;
`;
