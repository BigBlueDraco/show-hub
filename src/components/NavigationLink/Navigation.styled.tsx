import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface IStyledNavLink {}

export const StyledNavLink = styled(NavLink)<IStyledNavLink>`
  font-style: normal;
  font-size: 32px;
  line-height: 27px;
  text-decoration: none;

  color: #000000;
  flex-grow: 0;
  &.active {

    color: ${({ theme: { colors } }) => colors.accent.primary};
    font-weight: 600;
    pointer-events: none;
  }

  ${({ theme: { media } }) =>
    media.desk +
    `{
      font-size: 20px;
    }`}
  &:hover {
    transform scale(1.2);
    color: ${({ theme: { colors } }) => colors.accent.secondery};
  }
`;
