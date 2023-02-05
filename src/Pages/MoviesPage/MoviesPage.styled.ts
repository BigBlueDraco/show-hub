import styled from "styled-components";

interface IStyledMoviePageBg {
  bgImg?: string;
}
export const MoviePageBg = styled("div")<IStyledMoviePageBg>`
  ${({ theme }) => theme.colors.background.secondery}
  padding-top: 64px;
  background-image: url(${({ bgImg }) => bgImg});
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`;
export const MoviePageWraper = styled("div")`
  ${({ theme }) => theme.colors.background.primary}
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  overflow: hidden;
`;
export const MovieTitle = styled("h1")``;
