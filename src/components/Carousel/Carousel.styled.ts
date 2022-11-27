import styled from "styled-components";
import { Button } from "../Button/Button";

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

export const StyledCaruselButton = styled(Button)`
  height: 100%;
  min-width: 48px;
  ${(p) =>
    p.left && "border-top-right-radius: 0px; border-bottom-right-radius: 0px;"}
  ${(p) =>
    p.right && "border-top-left-radius: 0px; border-bottom-left-radius: 0px;"}
  width: 48px;

  &:hover svg {
    @keyframes swing-left {
      from {
        transform: translateX(0px);
      }
      to {
        transform: translateX(-5px);
      }
    }
    @keyframes swing-right {
      from {
        transform: translateX(0px);
      }
      to {
        transform: translateX(5px);
      }
    }

    ${(p) => p.left && "animation-name: swing-left;"}
    ${(p) => p.right && "animation-name: swing-right;"}
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
  }
`;
