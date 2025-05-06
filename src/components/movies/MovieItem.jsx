import { color, vote } from "../../helpers";

export default function MovieItem({ movie }) {
  return (
    <div className="card">
      <span className={`badge ${color(movie.vote_average)}`}>
        {vote(movie.vote_average)}%
      </span>
      <img
        className="card-movie-poster"
        width="200"
        height="300"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
        loading="lazy"
      />
      <div className="card-body">
        <h3 className="card-movie-title">{movie.title}</h3>
        <p className="card-movie-date">{movie.release_date}</p>
        <a href="/movie-details.html?id=" className="link"></a>
      </div>
    </div>
  );
}
