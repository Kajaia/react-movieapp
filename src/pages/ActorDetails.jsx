import { useParams } from "react-router";
import Header from "../components/layouts/Header";
import { useEffect, useState } from "react";
import { baseURL, options } from "../services/api";

export default function ActorDetails() {
  const { id } = useParams();
  const [actor, setActor] = useState(null);

  useEffect(() => {
    getActor();

    return () => setActor(null);
  }, []);

  const getActor = async () => {
    try {
      const res = await fetch(`${baseURL}/person/${id}`, options);

      if (!res.ok) {
        throw new Error("Can not get actor.");
      }

      const results = await res.json();
      setActor(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header style="flex">
        <div id="details">
          <img
            className="card-movie-poster"
            width="280"
            height="400"
            src={"https://image.tmdb.org/t/p/w500" + actor?.profile_path}
            alt={actor?.name}
            loading="lazy"
          />
        </div>
        <div>
          <h1>{actor?.name}</h1>
          <p>{actor?.birthday}</p>
          <i>{actor?.place_of_birth}</i>
          <h2>Bio</h2>
          <p>{actor?.biography}</p>
        </div>
      </Header>
    </>
  );
}
