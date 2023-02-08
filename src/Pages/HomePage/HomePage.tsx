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
      const topMovies = await api.feathTopRateMovies();
      const topTVs = await api.feathTopRateTVs();
      setTopMoviesAllTheTime(topMovies.results);
      setTopTVsAllTheTime(topTVs.results);
    };
    feath();
  }, []);
  return (
    <>
      <Hero />
      <CarouselSection
        title="Top Movies"
        elements={topMoviesAllTheTime}
        endpoint={"movie"}
      />
      <CarouselSection
        title="Top TV shows"
        elements={topTVsAllTheTime}
        endpoint={"tv-shows"}
        last
      />
    </>
  );
};
