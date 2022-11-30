import { Container } from "../../utils/Container";
import {
  StyledSectionDecor,
  StyledSectionTitle,
  StyledSectionWraper,
} from "./Section.styled";

interface ISection {
  children?: React.ReactNode;
}
export const Section: React.FC<ISection> = ({ children }) => {
  return (
    <section>
      <Container>
        <StyledSectionWraper>
          <StyledSectionTitle>Title</StyledSectionTitle>
          <StyledSectionDecor />
        </StyledSectionWraper>
        {children}{" "}
      </Container>
    </section>
  );
};
