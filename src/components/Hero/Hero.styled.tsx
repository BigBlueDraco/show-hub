import styled from "styled-components";

interface IStyledHeroWraper {}

export const StyledHeroWraper = styled("div")<IStyledHeroWraper>`
  width: 100%;

  padding: 140px 70px;
  ${({ theme: { colors } }) => colors.text.primary}
  background: linear-gradient(
    135deg,
    #ca26ff 7.17%,
    #f4cac0 85.48%,
    #fff3b0 100%
  );
  border-radius: 20px 20px 300px 20px;
`;

export const StyledHeroTextWraper = styled("div")`
  max-width: 700px;
`;

export const StyledHeroTitle = styled("h1")`
  font-weight: 700;
  font-size: 60px;

  ${({ theme: { colors } }) => colors.text.primaryTitle}

  letter-spacing: 0.125em;
`;

export const StyledHeroSubTitle = styled("p")`
  margin-top: 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;

  letter-spacing: 0.395em;
`;

export const StyledHeroDisc = styled("p")`
  margin-top: 64px;
  padding-left: 36px;
  //   max-width: 700px;
  font-weight: 700;
  font-size: 20px;
  line-height: 1.5em;

  letter-spacing: 0.015em;
`;

export const StyledHeroImg = styled("img")``;
