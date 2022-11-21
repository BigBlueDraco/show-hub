import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IStyledNavLink {}

export const StyledNavLink = styled(NavLink)<IStyledNavLink>`
  font-style: normal;
  font-size: 20px;
  line-height: 27px;
  text-decoration: none;

  color: #000000;
  flex-grow: 0;
  &.active {
    // transform scale(1.2);
    color: ${({ theme: { colors } }) => colors.accent.primary};
    font-weight: 600;
    pointer-events: none;
  }
  &:hover {
    color: ${({ theme: { colors } }) => colors.accent.secondery};
    // color: red;
  }
`;
