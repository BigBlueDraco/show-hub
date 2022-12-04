import { Button } from "../Button/Button";
import {
  StyledMovieCardWraper,
  StyledMovieCardImg,
  StyledMovieCardButton,
} from "./MovieCard.styled";

interface IMovieCard {
  imgUrl: string;
  movieName: string;
  [attrs: string]: any;
}

export const MovieCard: React.FC<IMovieCard> = ({
  children,
  imgUrl,
  movieName,
  ...attrs
}) => {
  return (
    <StyledMovieCardWraper {...attrs}>
      <StyledMovieCardImg
        src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
        alt="Film poster"
      />
      <StyledMovieCardButton primary>{movieName}</StyledMovieCardButton>
    </StyledMovieCardWraper>
  );
};
