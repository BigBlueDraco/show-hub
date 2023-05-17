import { Container } from "../../utils/Container";
import {
  MoviePageBg,
  MoviePageWraper,
  MovieTitle,
  MovieImage,
  MovieDisc,
  MovieSubTitle,
  MoviePageInfo,
} from "./MoviesPage.styled";
import { GenresList } from "../../components/GenersList/GenresList";
import { useFetchDetails } from "../../hooks/useFetchDetiles";
import { Link, Outlet, useLocation } from "react-router-dom";
import { NavigationLink } from "../../components/NavigationLink/NavLink";

export const MoviePage = () => {
  const { data, type } = useFetchDetails();

  const location = useLocation();
  console.log(location);
  return (
    <>
      <MoviePageBg
        bgImg={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
      >
        <Container>
          {data && (
            <MoviePageWraper>
              <MoviePageInfo>
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                  alt=""
                  width="350px"
                />
                <div>
                  <MovieTitle>{data.title || data?.name}</MovieTitle>
                  <p>User average: {data.vote_average}</p>
                  <MovieDisc>{data.overview}</MovieDisc>
                  <MovieSubTitle>Geners:</MovieSubTitle>
                  <GenresList genres={data.genres} />
                </div>
              </MoviePageInfo>
              <NavigationLink to={`cast`}>Cast</NavigationLink>
              <NavigationLink to={`reviews`}>Reviews</NavigationLink>
              <Outlet />
            </MoviePageWraper>
          )}
        </Container>
      </MoviePageBg>
    </>
  );
};
