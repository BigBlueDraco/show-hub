import styled from "styled-components";

interface IStyledHeader {}
export const StyledHeader = styled("header")<IStyledHeader>`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0px;
  gap: 114px;

  padding-top: 32px;
  padding-bottom: 64px;

  @media (min-width: 900px) {
    // flex-direction: column;
  }
`;
