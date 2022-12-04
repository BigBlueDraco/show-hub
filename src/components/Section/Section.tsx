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
  title?: string;
}
export const Section: React.FC<ISection> = ({
  children,
  title,
  last = false,
}) => {
  return (
    <StyledSection last={last}>
      <Container>
        <StyledSectionWraper>
          <StyledSectionTitle>{title}</StyledSectionTitle>
          <StyledSectionDecor />
        </StyledSectionWraper>
        {children}
      </Container>
    </StyledSection>
  );
};
