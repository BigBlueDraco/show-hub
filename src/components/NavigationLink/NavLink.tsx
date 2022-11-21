import { StyledNavLink } from "./Navigation.styled";
import { ReactNode } from "react";

interface INavLink {
  to: string;
  children: ReactNode;
}

export const NavigationLink: React.FC<INavLink> = ({ to, children }) => {
  return <StyledNavLink to={to}>{children}</StyledNavLink>;
};
