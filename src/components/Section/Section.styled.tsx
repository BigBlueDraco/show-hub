import styled from "styled-components";

interface IStyledSection {
  last?: boolean;
}
export const StyledSection = styled("section")<IStyledSection>`
  // padding-top: 128px;
  ${(p) => p.theme.paddings.section.top}
  ${(p) => p.last && p.theme.paddings.section.bot};
`;
export const StyledSectionDecor = styled("div")`
  height: 1px;
  background: #000000;
  position: relative;
`;
export const StyledSectionTitle = styled("h2")`
  position: absolute;
  top: -0.55em;
  left: 3em;
  z-index: 1;

  padding: 0px 10px;
  background: white;
`;
export const StyledSectionWraper = styled("div")`
  position: relative;
  margin-bottom: 56px;
`;
