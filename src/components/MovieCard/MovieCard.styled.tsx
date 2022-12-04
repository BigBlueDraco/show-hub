import styled from "styled-components";
import { Button } from "../Button/Button";
import { StyledLink } from "../link/link.styled";
export const StyledMovieCardWraper = styled("div")`
  //   min-width: 240px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 15px 30px;
`;
export const StyledMovieCardImg = styled("img")`
  // min-width: 240px;
  width: 100%;
  height: 356px;
  border-radius: 35px;
  &:hover {
    cursor: zoom-in;
    transform: scale(1.05);
    position: reletive;
  }
`;
export const StyledMovieCardButton = styled(StyledLink)`
  width: 100%;
  // max-width: 256px;
`;
