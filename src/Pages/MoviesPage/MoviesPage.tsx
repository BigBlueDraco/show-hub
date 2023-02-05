import { TMDBApi } from "../../services/TMDBApi";
import { Container } from "../../utils/Container";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoviePageBg, MoviePageWraper, MovieTitle } from "./MoviesPage.styled";
import { Section } from "../../components/Section/Section";

export const MoviePage = () => {
  const api = new TMDBApi();
  const [movie, setMovie] = useState<any>();
  const { movieId } = useParams();

  useEffect(() => {
    api.featheMovieById(movieId || "238").then(setMovie);
  }, [movieId]);
  console.log(movie);
  return (
    <>
      <MoviePageBg
        bgImg={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
      >
        <Container>
          {movie && (
            <MoviePageWraper>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt=""
                width="350px"
              />
              <MovieTitle>{movie.title}</MovieTitle>
              <p>{movie.overview}</p>
              <p>{movie.vote_average}</p>
              {movie.genres.map(({ name }: any) => (
                <p>{name}</p>
              ))}
              <Section></Section>
            </MoviePageWraper>
          )}
        </Container>
      </MoviePageBg>
    </>
  );
};
