import React, {
  Children,
  cloneElement,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface ICarousel {
  children?: ReactNode;
}
export const Carousel: React.FC<ICarousel> = ({ children }) => {
  const [pages, setPages] = useState<Array<any>>([]);

  useEffect(() => {
    setPages([
      Children.map(children, (child) => {
        return <div>{child}</div>;
      }),
    ]);
  }, );

  console.log(pages);

  return (
    <>
      Carousel
      <>{pages}</>
      <div className="window">{children}</div>
    </>
  );
};
