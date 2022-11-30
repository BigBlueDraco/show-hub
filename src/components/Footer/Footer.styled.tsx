import styled from "styled-components";

export const StyledFooter = styled("footer")`
  ${({ theme: { colors } }) => colors.background.secondery}
  ${({ theme: { colors } }) => colors.text.seconderyTitle}
  padding: 90px 0px;
`;

export const StyledColumn = styled("div")`
display flex;
flex-direction: column;
flex-basis: 25%;
gap: 20px;`;

export const StyledFooterWraper = styled("div")`
  display: flex;

  justify-content: space-around;
`;
export const StyledDecorator = styled("div")`
  flex-basis: 1px;
  width: 1px;
  background: #fff;
`;

export const StyledContactsList = styled("ul")`
  display: flex;
  flex-direction: column;
`;