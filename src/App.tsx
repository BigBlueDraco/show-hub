import "./App.css";
import { Carousel } from "./components/Carousel/Carousel";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero />
      <Carousel>
        <div>red</div>
        <div style={{ background: "blue" }}>blue</div>
        <div style={{ background: "green" }}>green</div>
      </Carousel>
    </div>
  );
}

export default App;
