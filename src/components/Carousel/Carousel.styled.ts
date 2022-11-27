import styled from "styled-components";

interface IStyledWindow {
  width?: string;
  height?: string;
}

export const StyledCarouselWraper = styled("div")<IStyledWindow>`
  display: flex;
  height: ${(p) => p.height || "100%"};
  width: ${(p) => p.width || "100%"};
`;
export const StyledWindow = styled("div")<IStyledWindow>`
  height: 100%;
  width: 100%;

  overflow: hidden;
`;

export const StyledAllItemsContainer = styled("div")`
  height: 100%;
  display: flex;
`;

export const StyledLastItem = styled("div")`
  width: 100%;
`;
