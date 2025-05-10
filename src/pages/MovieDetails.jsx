import { useParams } from "react-router";
import Header from "../components/layouts/Header";
import { useEffect, useState } from "react";
import { baseURL, options } from "../services/api";
import { color, vote } from "../helpers";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovie();

    return () => setMovie(null);
  }, []);

  const getMovie = async () => {
    try {
      const res = await fetch(`${baseURL}/movie/${id}`, options);

      if (!res.ok) {
        throw new Error("Can not get movie.");
      }

      const results = await res.json();
      setMovie(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Header style="flex">
      <div>
        <span className={`badge ${color(movie?.vote_average)}`}>
          {vote(movie?.vote_average)}%
        </span>
        <img
          className="card-movie-poster"
          width="280"
          height="400"
          src={"https://image.tmdb.org/t/p/w500" + movie?.poster_path}
          alt={movie?.title}
          loading="lazy"
        />
      </div>
      <div>
        <h1>{movie?.title}</h1>
        <p>
          {movie?.release_date} • {movie?.runtime} min
        </p>
        <i>{movie?.tagline}</i>
        <h2>Overview</h2>
        <p>{movie?.overview}</p>
      </div>
    </Header>
  );
}
