import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { Button } from "../Button/Button";
import { Navigation } from "../Navigation/Navigation";
import { theme } from "../../utils/theme";

export const StyledHeader = styled("header")`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0px;
  gap: 114px;

  padding-top: 32px;
  padding-bottom: 32px;

  ${({ theme: { media } }) =>
    media.onlyDesk +
    `{
    justify-content: space-between;
  }`}
`;
export const StyledHeaderMenuIcon = styled(BiMenu)`
  width: 18px;
  height: 18px;
`;
export const StyledHeaderButton = styled(Button)`
  min-width: 0;
  min-height: 0;
  padding: 4px 6px;
`;

export const StyledModalMenuWraper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  ${({ theme: { media } }) =>
    media.tablet +
    `{
    gap: 70px;
  }`}
`;
export const StyledModalNavigation = styled(Navigation)`
  display: flex;
  flex-direction: column;
`;
