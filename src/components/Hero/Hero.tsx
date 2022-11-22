import { Container } from "../../utils/Container";
import {
  StyledHeroDisc,
  StyledHeroImg,
  StyledHeroSubTitle,
  StyledHeroTextWraper,
  StyledHeroTitle,
  StyledHeroWraper,
} from "./Hero.styled";
interface IHero {}

export const Hero: React.FC<IHero> = () => {
  return (
    <Container>
      <StyledHeroWraper>
        <StyledHeroTextWraper>
          <StyledHeroTitle>ShowHub</StyledHeroTitle>
          <StyledHeroSubTitle>enjoy watching</StyledHeroSubTitle>
          <StyledHeroDisc>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enimad minim veniam, quis nostrud exerci Lorem
            ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
            nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enimad minim veniam, quis nostrud exerci
          </StyledHeroDisc>
        </StyledHeroTextWraper>
      </StyledHeroWraper>
    </Container>
  );
};
