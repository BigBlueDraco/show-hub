import { NavigationLink } from "../NavigationLink/NavLink";
import { StyledNavigation } from "./Navigation.styled";

interface INavigation {}
export const Navigation: React.FC<INavigation> = () => {
  return <StyledNavigation></StyledNavigation>;
};
