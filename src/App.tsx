import { useEffect, useState } from "react";

import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Footer } from "./components/Footer/Footer";
import { CarouselSection } from "./components/CarouselSection/CarouselSection";
import { TMDBApi } from "./services/TMDBApi";

function App() {
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
    <div>
      <Header></Header>
      <Hero />
      <CarouselSection title="Top Movies" elements={topMoviesAllTheTime} />
      <CarouselSection title="Top TV shows" elements={topTVsAllTheTime} last />
      <Footer />
    </div>
  );
}

export default App;
