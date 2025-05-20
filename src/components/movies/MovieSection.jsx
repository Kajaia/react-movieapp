import MovieItem from "./MovieItem";
import useFetch from "../../hooks/useFetch";

export default function MovieSection({
  title,
  background,
  link,
  stopScroll,
  url,
}) {
  const { data } = useFetch(link);

  return (
    <section className={`movie-section ${background}`}>
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className={`scroll-wrapper ${stopScroll ? "stop-scroll" : ""}`}>
          {data?.results && data?.results.length > 0
            ? data?.results.map((movie) => (
                <MovieItem key={movie.id} movie={movie} url={url} />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}
