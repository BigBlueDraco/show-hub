import { Container } from "../../utils/Container";
import {
  MoviePageBg,
  MoviePageWraper,
  MovieTitle,
  MovieImage,
  MovieDisc,
  MovieSubTitle,
} from "./MoviesPage.styled";
import { GenresList } from "../../components/GenersList/GenresList";
import { useFetchDetails } from "../../hooks/useFetchDetiles";

export const MoviePage = () => {
  const movie = useFetchDetails();
  return (
    <>
      <MoviePageBg
        bgImg={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
      >
        <Container>
          {movie && (
            <MoviePageWraper>
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt=""
                width="350px"
              />
              <div>
                <MovieTitle>{movie.title}</MovieTitle>
                <p>User average: {movie.vote_average}</p>
                <MovieDisc>{movie.overview}</MovieDisc>
                <MovieSubTitle>Geners:</MovieSubTitle>
                <GenresList genres={movie.genres} />
              </div>
            </MoviePageWraper>
          )}
        </Container>
      </MoviePageBg>
    </>
  );
};
