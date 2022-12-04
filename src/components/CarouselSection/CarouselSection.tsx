import { Carousel } from "../Carousel/Carousel";
import { MovieCard } from "../MovieCard/MovieCard";
import { Section } from "../Section/Section";

interface ICarouselSection {
  last?: boolean;
  elements?: Array<any>;
  title?: string;
}
export const CarouselSection: React.FC<ICarouselSection> = ({
  title,
  last,
  elements = [],
}) => {
  return (
    <Section title={title} last={last}>
      <Carousel ItemsPerPage={4} height="100%">
        {elements.map((element) => {
          return (
            <MovieCard
              key={element.id}
              imgUrl={element.poster_path}
              movieName={element.title || element.name}
              movieId={element.id}
            />
          );
        })}
      </Carousel>
    </Section>
  );
};
