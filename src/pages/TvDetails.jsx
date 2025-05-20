import { useParams } from "react-router";
import Header from "../components/layouts/Header";
import { color, vote } from "../helpers";
import CastSection from "../components/movies/CastSection";
import GallerySection from "../components/movies/GallerySection";
import useFetch from "../hooks/useFetch";

export default function TvDetails() {
  const { id } = useParams();
  const { data } = useFetch(`/tv/${id}`);

  return (
    <>
      <Header style="flex">
        <div id="details">
          <span className={`badge ${color(data?.vote_average)}`}>
            {vote(data?.vote_average)}%
          </span>
          <img
            className="card-movie-poster"
            width="280"
            height="400"
            src={"https://image.tmdb.org/t/p/w500" + data?.poster_path}
            alt={data?.name}
            loading="lazy"
          />
        </div>
        <div>
          <h1>{data?.name}</h1>
          <p>
            {data?.first_air_date} • {data?.episode_run_time} min
          </p>
          <i>{data?.status}</i>
          <h2>Overview</h2>
          <p>{data?.overview}</p>
        </div>
      </Header>
      <CastSection id={id} />
      <GallerySection id={id} />
    </>
  );
}
