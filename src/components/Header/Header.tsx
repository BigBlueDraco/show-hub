import { Container } from "../../utils/Container";
import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import { SearcheBar } from "../SearcheBar/SearcheBar";
import {
  StyledHeader,
  StyledHeaderButton,
  StyledHeaderMenuIcon,
  StyledModalMenuWraper,
  StyledModalNavigation,
} from "./Header.styled";
import { useState } from "react";
import { useMyMedia } from "../../hooks/useMedia";
import { ModalWindowWraper } from "../ModalWindowWraper/ModalWindowWraper";

interface IHeader {}
export const Header: React.FC<IHeader> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isDesktop } = useMyMedia();
  return (
    <>
      {isModalOpen && (
        <ModalWindowWraper>
          <StyledModalMenuWraper>
            <SearcheBar />
            <StyledModalNavigation />
          </StyledModalMenuWraper>
        </ModalWindowWraper>
      )}
      <Container>
        <StyledHeader>
          <Logo />
          {isDesktop ? (
            <>
              <Navigation />
              <SearcheBar />
            </>
          ) : (
            <StyledHeaderButton onClick={() => setIsModalOpen(true)}>
              <StyledHeaderMenuIcon />
            </StyledHeaderButton>
          )}
        </StyledHeader>
      </Container>
    </>
  );
};
