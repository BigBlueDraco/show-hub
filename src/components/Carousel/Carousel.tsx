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
  StyledLastItem,
  StyledWindow,
} from "./Carousel.styled";

interface ICarousel {
  children?: ReactNode;
  ItemsPerPage?: number;
}
const PAGE_WIGHT: number = 33;
export const Carousel: React.FC<ICarousel> = ({
  children,
  ItemsPerPage = 1,
}) => {
  const [pages, setPages] = useState<any>([]);
  const [offset, setOffset] = useState<number>(0);
  const pageWight = 100 / ItemsPerPage;

  useEffect(() => {
    // setPages([
    //   Children.map(children, (child) => {
    //     return cloneElement(child as React.ReactElement<any>, {
    //       style: {
    //         height: "100%",
    //         maxWidth: `${PAGE_WIGHT}%`,
    //         minWidth: `${PAGE_WIGHT}%`,
    //       },
    //     });
    //   }),
    // ]);
    setPages(() => {
      const res = Children.map(children, (child) => {
        return cloneElement(child as React.ReactElement<any>, {
          style: {
            height: "100%",
            maxWidth: `${pageWight}%`,
            minWidth: `${pageWight}%`,
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
      const maxOffset: number = -pageWight * pages.length + 100;
      console.log("Offset" + Math.max(prevState - 100, maxOffset));
      console.log("MaxIffset" + maxOffset);
      return Math.max(prevState - 100, maxOffset);
    });
  };

  return (
    <>
      Carousel
      <StyledCarouselWraper>
        <button onClick={handleLeftArrowClick}>
          <AiOutlineArrowLeft />
        </button>
        <StyledWindow>
          <StyledAllItemsContainer
            style={{ transform: `translateX(${offset}%)` }}
          >
            {pages}
          </StyledAllItemsContainer>
        </StyledWindow>
        <button onClick={handleRightArrowClick}>
          <AiOutlineArrowRight />
        </button>
      </StyledCarouselWraper>
    </>
  );
};
