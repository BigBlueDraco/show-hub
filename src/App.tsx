import "./App.css";
import { Carousel } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Container } from "./utils/Container";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero />
      <Container>
        <Carousel ItemsPerPage={2}>
          <div>red</div>
          <div>blue</div>
          <div>green</div>
          <div>green1</div>
          <div>green2</div>
          <div>green3</div>
          <div>green4</div>
          <div>green5</div>
          <div>green6</div>
          <div>green7</div>
        </Carousel>
      </Container>
    </div>
  );
}

export default App;
