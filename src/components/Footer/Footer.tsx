import { Container } from "../../utils/Container";
import {
  StyledColumn,
  StyledFooter,
  StyledFooterWraper,
  StyledDecorator,
  StyledContactsList,
} from "./Footer.styled";

import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaTelegramPlane, FaMapMarkerAlt } from "react-icons/fa";

interface IFooter {}
export const Footer: React.FC<IFooter> = () => {
  return (
    <StyledFooter>
      <Container>
        <StyledFooterWraper>
          <StyledColumn>
            <h1>title</h1>
            <div>Some info</div>
            <StyledContactsList>
              <li>
                <BsGithub />
                GitHub
              </li>
              <li>
                <FaLinkedinIn />
                linkedin
              </li>
              <li>
                <FaTelegramPlane />
                linkedin
              </li>
              <li>
                <FaMapMarkerAlt />
                linkedin
              </li>
            </StyledContactsList>
          </StyledColumn>
          <StyledDecorator />
          <StyledColumn>laflalsfklaklf2</StyledColumn>
          <StyledDecorator />
          <StyledColumn>lasfkaksflaskflas</StyledColumn>
        </StyledFooterWraper>
      </Container>
    </StyledFooter>
  );
};
