import { useParams } from "react-router";
import Header from "../components/layouts/Header";
import { useEffect, useState } from "react";
import { baseURL, options } from "../services/api";
import { color, vote } from "../helpers";
import CastSection from "../components/movies/CastSection";
import GallerySection from "../components/movies/GallerySection";

export default function TvDetails() {
  const { id } = useParams();
  const [tv, setTv] = useState(null);

  useEffect(() => {
    getTv();

    return () => setTv(null);
  }, []);

  const getTv = async () => {
    try {
      const res = await fetch(`${baseURL}/tv/${id}`, options);

      if (!res.ok) {
        throw new Error("Can not get tv.");
      }

      const results = await res.json();
      setTv(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header style="flex">
        <div id="details">
          <span className={`badge ${color(tv?.vote_average)}`}>
            {vote(tv?.vote_average)}%
          </span>
          <img
            className="card-movie-poster"
            width="280"
            height="400"
            src={"https://image.tmdb.org/t/p/w500" + tv?.poster_path}
            alt={tv?.name}
            loading="lazy"
          />
        </div>
        <div>
          <h1>{tv?.name}</h1>
          <p>
            {tv?.first_air_date} • {tv?.episode_run_time} min
          </p>
          <i>{tv?.status}</i>
          <h2>Overview</h2>
          <p>{tv?.overview}</p>
        </div>
      </Header>
      <CastSection id={id} />
      <GallerySection id={id} />
    </>
  );
}
