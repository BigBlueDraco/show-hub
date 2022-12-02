import React, {
  Children,
  cloneElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {
  StyledAllItemsContainer,
  StyledCarouselWraper,
  StyledCaruselButton,
  StyledLastItem,
  StyledWindow,
} from "./Carousel.styled";

interface ICarousel {
  children?: ReactNode;
  ItemsPerPage?: number;
  width?: string;
  height?: string;
}
const PAGE_WIDTH: number = 33;
export const Carousel: React.FC<ICarousel> = ({
  children,
  ItemsPerPage = 1,
  width = "",
  height = "",
}) => {
  const [pages, setPages] = useState<any>([]);
  const [offset, setOffset] = useState<number>(0);
  const pagewidth = 100 / ItemsPerPage;

  useEffect(() => {
    setPages(() => {
      const res = Children.map(children, (child) => {
        return cloneElement(child as React.ReactElement<any>, {
          style: {
            height: "100%",
            maxWidth: `${pagewidth}%`,
            minWidth: `${pagewidth}%`,
          },
        });
      });
      return res;
    });
  }, []);

  const handleLeftArrowClick = (e: React.MouseEvent<HTMLElement>) => {
    setOffset((prevState) => {
      return Math.min(prevState + 100, 0);
    });
  };
  const handleRightArrowClick = (e: React.MouseEvent<HTMLElement>) => {
    setOffset((prevState) => {
      const maxOffset: number = -pagewidth * pages.length + 100;
      return Math.max(prevState - 100, maxOffset);
    });
  };

  return (
    <>
      <StyledCarouselWraper width={width} height={height}>
        <StyledCaruselButton primary left onClick={handleLeftArrowClick}>
          <AiOutlineArrowLeft />
        </StyledCaruselButton>
        <StyledWindow>
          <StyledAllItemsContainer
            style={{ transform: `translateX(${offset}%)` }}
          >
            {pages}
          </StyledAllItemsContainer>
        </StyledWindow>
        <StyledCaruselButton primary right onClick={handleRightArrowClick}>
          <AiOutlineArrowRight />
        </StyledCaruselButton>
      </StyledCarouselWraper>
    </>
  );
};
