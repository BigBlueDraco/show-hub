import {
  StyledSearcheBarIcon,
  StyledSearcheBarInput,
  StyledSearcheBarWraper,
} from "./SearcheBar.styled";

interface ISearcheBar {}

export const SearcheBar: React.FC<ISearcheBar> = () => {
  return (
    <StyledSearcheBarWraper>
      <StyledSearcheBarInput placeholder="Searche" />
      <StyledSearcheBarIcon />
    </StyledSearcheBarWraper>
  );
};
