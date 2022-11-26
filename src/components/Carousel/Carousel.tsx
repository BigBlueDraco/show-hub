import React, {
  Children,
  cloneElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { redirect } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { StyledAllItemsContainer, StyledWindow } from "./Carousel.styled";

interface ICarousel {
  children?: ReactNode;
}
const PAGE_WIGHT: number = 100;
export const Carousel: React.FC<ICarousel> = ({ children }) => {
  const [pages, setPages] = useState<any>([]);
  const [offset, setOffset] = useState<number>(0);

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
            maxWidth: `${PAGE_WIGHT}%`,
            minWidth: `${PAGE_WIGHT}%`,
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
    console.log(e.target);
  };
  const handleRightArrowClick = (e: React.MouseEvent<HTMLElement>) => {
    setOffset((prevState) => {
      const maxOffset: number = -PAGE_WIGHT * (pages.length - 1);
      console.log(pages.length);
      return Math.max(prevState - 100, maxOffset);
    });
  };

  return (
    <>
      Carousel
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
    </>
  );
};
