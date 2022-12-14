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
gap: 48px;`;

export const StyledFooterWraper = styled("div")`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-around;
  ${({ theme: { media } }) =>
    media.tablet +
    `{
      gap: 0px;
    flex-direction: row;
  }`}
`;
export const StyledDecorator = styled("div")`
  flex-basis: 1px;
  background: #fff;
  ${({ theme: { media } }) =>
    media.tablet +
    `{
    width: 1px;
}`}
`;

export const StyledContactsList = styled("ul")`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const StyledContactsListItem = styled("li")`
  display: flex;
  gap: 24px;
  align-items: center;
  font-size: 16px;
  line-height: 19px;
  & svg {
    width: 30px;
    height: 30px;
  }
`;

export const StyledTittle = styled("p")`
  font-weight: 700;
  font-size: 22px;
  line-height: 27px;
`;
