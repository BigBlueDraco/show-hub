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
const PAGE_WIGHT = "100%";
export const Carousel: React.FC<ICarousel> = ({ children }) => {
  const [pages, setPages] = useState<Array<any>>([]);
  const [offset, setOffset] = useState<number>(0);

  const handleLeftArrowClick = (e: React.MouseEvent<HTMLElement>) => {
    setOffset((prevState) => {
      return prevState + 100;
    });
    console.log(e.target);
  };
  const handleRightArrowClick = (e: React.MouseEvent<HTMLElement>) => {
    setOffset((prevState) => {
      return prevState - 100;
    });
  };

  useEffect(() => {
    setPages([
      Children.map(children, (child) => {
        return cloneElement(child as React.ReactElement<any>, {
          style: {
            height: "100%",
            maxWidth: `${PAGE_WIGHT}`,
            minWidth: `${PAGE_WIGHT}`,
          },
        });
      }),
    ]);
  }, []);

  console.log(pages);

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
