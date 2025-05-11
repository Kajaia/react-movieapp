export default function CastItem({ actor }) {
  return (
    <div className="card">
      <img
        className="card-movie-poster"
        width="200"
        height="300"
        src={"https://image.tmdb.org/t/p/w500" + actor?.profile_path}
        alt={actor?.name}
        loading="lazy"
      />
      <div className="card-body">
        <h3 className="card-movie-title">{actor?.name}</h3>
        <p className="card-movie-date">{actor?.character}</p>
      </div>
    </div>
  );
}
