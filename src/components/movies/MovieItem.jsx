import { Link } from "react-router-dom";
import { color, vote } from "../../helpers";

export default function MovieItem({ movie, url }) {
  return (
    <div className="card">
      {url !== "person" ? (
        <span className={`badge ${color(movie.vote_average)}`}>
          {vote(movie.vote_average)}%
        </span>
      ) : (
        ""
      )}
      <img
        className="card-movie-poster"
        width="200"
        height="300"
        src={
          "https://image.tmdb.org/t/p/w300" +
          (movie?.poster_path || movie?.profile_path)
        }
        alt={movie?.title || movie?.name}
        loading="lazy"
      />
      <div className="card-body">
        <h3 className="card-movie-title">{movie?.title || movie?.name}</h3>
        {movie?.release_date ||
        movie?.first_air_date ||
        movie?.known_for_department ? (
          <p className="card-movie-date">
            {movie?.release_date ||
              movie?.first_air_date ||
              movie?.known_for_department}
          </p>
        ) : (
          ""
        )}
        <Link to={`/${url || "movies"}/${movie.id}`} className="link" />
      </div>
    </div>
  );
}
