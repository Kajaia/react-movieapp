import { useParams } from "react-router";
import Header from "../components/layouts/Header";
import { age } from "../helpers";
import useFetch from "../hooks/useFetch";

export default function ActorDetails() {
  const { id } = useParams();
  const { data } = useFetch(`/person/${id}`);

  return (
    <>
      <Header style="flex">
        <div id="details">
          <img
            className="card-movie-poster"
            width="280"
            height="400"
            src={"https://image.tmdb.org/t/p/w500" + data?.profile_path}
            alt={data?.name}
            loading="lazy"
          />
        </div>
        <div>
          <h1>{data?.name}</h1>
          <p>
            {data?.birthday} • {age(data?.birthday)} years
          </p>
          <i>{data?.place_of_birth}</i>
          <h2>Bio</h2>
          <p>{data?.biography}</p>
        </div>
      </Header>
    </>
  );
}
