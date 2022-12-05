import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { Button } from "../Button/Button";

export const StyledHeader = styled("header")`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 0px;
  gap: 114px;

  padding-top: 32px;
  padding-bottom: 64px;

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
