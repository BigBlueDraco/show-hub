import { Container } from "../../utils/Container";
import {
  StyledColumn,
  StyledFooter,
  StyledFooterWraper,
  StyledDecorator,
  StyledContactsList,
  StyledContactsListItem,
  StyledTittle,
} from "./Footer.styled";

import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { FaLinkedinIn, FaTelegramPlane, FaMapMarkerAlt } from "react-icons/fa";

interface IFooter {}
export const Footer: React.FC<IFooter> = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterWraper>
          <StyledColumn>
            <StyledTittle>Contacts</StyledTittle>
            <StyledContactsList>
              <StyledContactsListItem>
                <BsGithub />
                GitHub
              </StyledContactsListItem>
              <StyledContactsListItem>
                <FaLinkedinIn />
                linkedin
              </StyledContactsListItem>
              <StyledContactsListItem>
                <FaTelegramPlane />
                Telegram
              </StyledContactsListItem>
              <StyledContactsListItem>
                <MdMail />
                Mail
              </StyledContactsListItem>
              <StyledContactsListItem>
                <FaMapMarkerAlt />
                Map
              </StyledContactsListItem>
            </StyledContactsList>
          </StyledColumn>
          <StyledDecorator />
          <StyledColumn>
            <StyledTittle>My tech skils</StyledTittle>
            <StyledContactsList>
              <StyledContactsListItem>
                <BsGithub />
                GitHub
              </StyledContactsListItem>
              <StyledContactsListItem>
                <FaLinkedinIn />
                linkedin
              </StyledContactsListItem>
              <StyledContactsListItem>
                <FaTelegramPlane />
                Telegram
              </StyledContactsListItem>
              <StyledContactsListItem>
                <MdMail />
                Mail
              </StyledContactsListItem>
              <StyledContactsListItem>
                <FaMapMarkerAlt />
                Map
              </StyledContactsListItem>
            </StyledContactsList>
          </StyledColumn>
          <StyledDecorator />
          <StyledColumn>
            <StyledTittle>About me</StyledTittle>
          </StyledColumn>
        </StyledFooterWraper>
      </Container>
    </StyledFooter>
  );
};
