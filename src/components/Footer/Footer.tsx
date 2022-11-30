import { Container } from "../../utils/Container";
import {
  StyledColumn,
  StyledFooter,
  StyledFooterWraper,
  StyledDecorator,
  StyledContactsList,
  StyledContactsListItem,
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
            Contacts
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
            My tech skils
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
          <StyledColumn>lasfkaksflaskflas</StyledColumn>
        </StyledFooterWraper>
      </Container>
    </StyledFooter>
  );
};
