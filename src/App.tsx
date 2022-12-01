import "./App.css";
import { Carousel } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Section } from "./components/Section/Section";
import { MovieCard } from "./components/MovieCard/MovieCard";

import { Container } from "./utils/Container";
import { Footer } from "./components/Footer/Footer";
import { CarouselSection } from "./components/CarouselSection/CarouselSection";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero />
      <CarouselSection />
      <CarouselSection />
      <CarouselSection last />
      <Footer />
    </div>
  );
}

export default App;
