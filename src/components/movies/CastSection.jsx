import { useEffect, useState } from "react";
import { baseURL, options } from "../../services/api";
import CastItem from "./CastItem";

export default function CastSection({ id }) {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    getActors();

    return () => setActors([]);
  }, []);

  const getActors = async () => {
    try {
      const res = await fetch(`${baseURL}/movie/${id}/credits`, options);

      if (!res.ok) {
        throw new Error("Can not get actors.");
      }

      const { cast } = await res.json();
      setActors(cast);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="movie-section">
      <div className="container">
        <h2 className="section-title">Cast</h2>
        <div className="scroll-wrapper">
          {actors && actors.length > 0
            ? actors.map((actor) => <CastItem key={actor.id} actor={actor} />)
            : ""}
        </div>
      </div>
    </section>
  );
}
