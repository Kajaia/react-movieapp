import { Route, Routes } from "react-router";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import TvPage from "./pages/TvPage";
import MoviesPage from "./pages/MoviesPage";
import PeoplePage from "./pages/PeoplePage";
import DashboardPage from "./pages/DashboardPage";
import PrivateRoutes from "./components/auth/PrivateRoutes";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

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
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
