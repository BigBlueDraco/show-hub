import { Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Layout } from "./Pages/Layout/Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=":movieId" element={<div>movie page</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
