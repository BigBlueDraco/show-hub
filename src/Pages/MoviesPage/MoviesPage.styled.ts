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
  padding: 32px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  overflow: hidden;
  display: flex;
  gap: 20px;
`;
export const MovieTitle = styled("h1")`
  font-size: 56px;
`;
export const MovieSubTitle = styled("h2")`
  font-size: 32px;
`;
export const MovieDisc = styled("div")`
  font-size: 24px;
`;

export const MovieImage = styled("img")`
  border-radius: 40px;
  width: 30%;
`;
