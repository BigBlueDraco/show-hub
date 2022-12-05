import { Container } from "../../utils/Container";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SearcheBar } from "../SearcheBar/SearcheBar";
import {
  StyledHeader,
  StyledHeaderButton,
  StyledHeaderMenuIcon,
} from "./Header.styled";
import { useMediaQuery } from "react-responsive";
import { BiMenuAltRight } from "react-icons/bi";
import { Button } from "../Button/Button";

interface IHeader {}
export const Header: React.FC<IHeader> = () => {
  const isDesctop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  return (
    <>
      <Container>
        <StyledHeader>
          <Logo />
          {isDesctop ? (
            <>
              <Navigation />
              <SearcheBar />
            </>
          ) : (
            <StyledHeaderButton>
              <StyledHeaderMenuIcon />
            </StyledHeaderButton>
          )}
        </StyledHeader>
      </Container>
    </>
  );
};
