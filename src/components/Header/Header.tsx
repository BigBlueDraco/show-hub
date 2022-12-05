import { Container } from "../../utils/Container";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SearcheBar } from "../SearcheBar/SearcheBar";
import {
  StyledHeader,
  StyledHeaderButton,
  StyledHeaderMenuIcon,
} from "./Header.styled";
import { useMyMedia } from "../../hooks/useMedia";

interface IHeader {}
export const Header: React.FC<IHeader> = () => {
  const { isDesktop } = useMyMedia();
  return (
    <>
      <Container>
        <StyledHeader>
          <Logo />
          {isDesktop ? (
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
