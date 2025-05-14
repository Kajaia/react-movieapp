import { Route, Routes } from "react-router";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import TvPage from "./pages/TvPage";
import MoviesPage from "./pages/MoviesPage";
import PeoplePage from "./pages/PeoplePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/person" element={<PeoplePage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route
          path="/tv/:id"
          element={
            <div className="container">
              <h1>TV Show Details</h1>
            </div>
          }
        />
        <Route
          path="/person/:id"
          element={
            <div className="container">
              <h1>Person Details</h1>
            </div>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
