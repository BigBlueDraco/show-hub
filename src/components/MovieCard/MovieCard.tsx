import {
  StyledMovieCardWraper,
  StyledMovieCardImg,
  StyledMovieCardButton,
} from "./MovieCard.styled";

interface IMovieCard {
  imgUrl: string;
  movieName: string;
  movieId: string;
  [attrs: string]: any;
}

export const MovieCard: React.FC<IMovieCard> = ({
  children,
  imgUrl,
  movieName,
  movieId,
  ...attrs
}) => {
  return (
    <StyledMovieCardWraper {...attrs}>
      <StyledMovieCardImg
        src={`https://image.tmdb.org/t/p/w500${imgUrl}`}
        alt="Film poster"
      />
      <StyledMovieCardButton to={`/${movieId}`} button primary>
        {movieName}
      </StyledMovieCardButton>
    </StyledMovieCardWraper>
  );
};
