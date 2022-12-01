import { Container } from "../../utils/Container";
import {
  StyledSectionDecor,
  StyledSectionTitle,
  StyledSectionWraper,
  StyledSection,
} from "./Section.styled";

interface ISection {
  children?: React.ReactNode;
  last?: boolean;
}
export const Section: React.FC<ISection> = ({ children, last = false }) => {
  return (
    <StyledSection last={last}>
      <Container>
        <StyledSectionWraper>
          <StyledSectionTitle>Title</StyledSectionTitle>
          <StyledSectionDecor />
        </StyledSectionWraper>
        {children}
      </Container>
    </StyledSection>
  );
};
