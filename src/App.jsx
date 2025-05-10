import { Route, Routes } from "react-router";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
