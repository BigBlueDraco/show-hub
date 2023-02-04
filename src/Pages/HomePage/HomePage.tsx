import { CarouselSection } from "../../components/CarouselSection/CarouselSection";
import { ModalWindowWraper } from "../../components/ModalWindowWraper/ModalWindowWraper";
import { TMDBApi } from "../../services/TMDBApi";
import { Hero } from "../../components/Hero/Hero";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const [topMoviesAllTheTime, setTopMoviesAllTheTime] = useState();
  const [topTVsAllTheTime, setTopTVsAllTheTime] = useState();
  useEffect(() => {
    const feath = async () => {
      const api = new TMDBApi();
      const topMovies = await api.featheTopRateMovies();
      const topTVs = await api.featheTopRateTVs();
      setTopMoviesAllTheTime(topMovies.results);
      setTopTVsAllTheTime(topTVs.results);
    };
    feath();
  }, []);
  return (
    <>
      <Hero />
      <CarouselSection title="Top Movies" elements={topMoviesAllTheTime} />
      <CarouselSection title="Top TV shows" elements={topTVsAllTheTime} last />
    </>
  );
};
