import { Container } from "../../utils/Container";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SearcheBar } from "../SearcheBar/SearcheBar";
import { StyledHeader } from "./Header.styled";

interface IHeader {}
export const Header: React.FC<IHeader> = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <Navigation />
        <SearcheBar />
      </StyledHeader>
    </Container>
  );
};
