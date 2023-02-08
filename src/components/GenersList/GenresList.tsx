import { element } from "prop-types";
import { StyledGenresListItem, StyledGenresList } from "./GenresList.styled";

export interface IGenresList {
  genres: any;
}

export const GenresList: React.FC<IGenresList> = ({ genres = [] }) => {
  return genres.length ? (
    <StyledGenresList>
      {genres.map(({ name, id }: any) => (
        <StyledGenresListItem key={id}>{name}</StyledGenresListItem>
      ))}
    </StyledGenresList>
  ) : null;
};
