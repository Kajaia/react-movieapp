import CastItem from "./CastItem";
import useFetch from "../../hooks/useFetch";

export default function CastSection({ id }) {
  const { data } = useFetch(`/movie/${id}/credits`);

  return (
    <section className="movie-section">
      <div className="container">
        <h2 className="section-title">Cast</h2>
        <div className="scroll-wrapper">
          {data?.cast && data?.cast.length > 0
            ? data?.cast.map((actor) => (
                <CastItem key={actor.id} actor={actor} />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}
