import "./App.css";
import { Carousel } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Section } from "./components/Section/Section";
import { MovieCard } from "./components/MovieCard/MovieCard";

import { Container } from "./utils/Container";
import { Footer } from "./components/Footer/Footer";
import { CarouselSection } from "./components/CarouselSection/CarouselSection";
import { TMDBApi } from "./services/TMDBApi";
import { useEffect, useState } from "react";
function App() {
  const [topMoviesAllTheTime, setTopMoviesAllTheTime] = useState();
  useEffect(() => {
    const feath = async () => {
      const api = new TMDBApi();
      const data = await api.featheTopRateMovies();
      setTopMoviesAllTheTime(data.results);
    };
    feath();
  }, []);
  return (
    <div className="App">
      <Header></Header>
      <Hero />
      <CarouselSection elements={topMoviesAllTheTime} last />
      <Footer />
    </div>
  );
}

export default App;
