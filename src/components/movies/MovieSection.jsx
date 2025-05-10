import { useEffect, useState } from "react";
import MovieItem from "./MovieItem";
import { baseURL, options } from "../../services/api";

export default function MovieSection({ title, background, link }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();

    return () => setMovies([]);
  }, []);

  const getMovies = async () => {
    try {
      const res = await fetch(`${baseURL}/movie/${link}`, options);

      if (!res.ok) {
        throw new Error("Can not get movies.");
      }

      const { results } = await res.json();
      setMovies(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className={`movie-section ${background}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="scroll-wrapper">
          {movies && movies.length > 0
            ? movies.map((movie) => <MovieItem key={movie.id} movie={movie} />)
            : ""}
        </div>
      </div>
    </section>
  );
}
