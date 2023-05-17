import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Layout } from "./Pages/Layout/Layout";
import { MoviePage } from "./Pages/MoviesPage/MoviesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path=":endpoint/" element={<Layout />}>
          <Route path=":movieId" element={<MoviePage />}>
            <Route path="cast" element={<>cast</>} />
            <Route path="reviews" element={<>reviews</>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
