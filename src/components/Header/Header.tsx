import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { StyledHeader } from "./Header.styled";

interface IHeader {}
export const Header: React.FC<IHeader> = () => {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
};
