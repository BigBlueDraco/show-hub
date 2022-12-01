import { Carousel } from "../Carousel/Carousel";
import { MovieCard } from "../MovieCard/MovieCard";
import { Section } from "../Section/Section";

export const CarouselSection = () => {
  return (
    <Section>
      <Carousel ItemsPerPage={4} height="100%">
        <MovieCard imgUrl="" movieName="1" />
        <MovieCard imgUrl="" movieName="2" />
        <MovieCard imgUrl="" movieName="3" />
        <MovieCard imgUrl="" movieName="4" />
        <MovieCard imgUrl="" movieName="5" />
        <MovieCard imgUrl="" movieName="6" />
        <MovieCard imgUrl="" movieName="7" />
        <MovieCard imgUrl="" movieName="8" />
        <MovieCard imgUrl="" movieName="9" />
        <MovieCard imgUrl="" movieName="10" />
        <MovieCard imgUrl="" movieName="11" />
        <MovieCard imgUrl="" movieName="12" />
        <MovieCard imgUrl="" movieName="14" />
        <MovieCard imgUrl="" movieName="15" />
        <MovieCard imgUrl="" movieName="16" />
        <MovieCard imgUrl="" movieName="17" />
        <MovieCard imgUrl="" movieName="18" />
        <MovieCard imgUrl="" movieName="19" />
        <MovieCard imgUrl="" movieName="20" />
      </Carousel>
    </Section>
  );
};
