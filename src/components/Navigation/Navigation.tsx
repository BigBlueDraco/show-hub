import { NavigationLink } from "../NavigationLink/NavLink";
import { StyledNavigation } from "./Navigation.styled";

interface INavigation {}
export const Navigation: React.FC<INavigation> = () => {
  return (
    <StyledNavigation>
      <NavigationLink to="">Movies</NavigationLink>
      <NavigationLink to="Series">Series</NavigationLink>
      <NavigationLink to="Contact">Contact</NavigationLink>
      <NavigationLink to="AboutUs">About Us</NavigationLink>
    </StyledNavigation>
  );
};
