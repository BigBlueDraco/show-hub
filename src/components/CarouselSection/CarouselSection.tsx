import { Carousel } from "../Carousel/Carousel";
import { MovieCard } from "../MovieCard/MovieCard";
import { Section } from "../Section/Section";

interface ICarouselSection {
  last?: boolean;
  elements?: Array<any>;
}
export const CarouselSection: React.FC<ICarouselSection> = ({
  last,
  elements = [],
}) => {
  console.log(elements[0]);
  return (
    <Section last={last}>
      <Carousel ItemsPerPage={4} height="100%">
        {elements.map((element) => {
          return (
            <MovieCard key={element.id} imgUrl="" movieName={element.title} />
          );
        })}
        <MovieCard imgUrl="" movieName="2" />
      </Carousel>
    </Section>
  );
};
