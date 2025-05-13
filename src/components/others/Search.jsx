import { useEffect, useState } from "react";
import { baseURL, options } from "../../services/api";
import { Link } from "react-router-dom";

export default function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (search.length >= 3) getData();
    else setData([]);
  }, [search]);

  const getData = async () => {
    const params = new URLSearchParams({ query: search });

    try {
      const res = await fetch(`${baseURL}/search/multi?${params}`, options);

      if (!res.ok) {
        throw new Error("Can not get search data.");
      }

      const { results } = await res.json();
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <input
        className="search"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for a movie, tv show, person..."
      />
      {data && data.length > 0 ? (
        <div className="search-box">
          {data && data.length > 0
            ? data.map((item) => (
                <div key={item.id} className="search-item">
                  {item?.poster_path || item?.profile_path ? (
                    <img
                      className="card-movie-poster"
                      width="50"
                      height="70"
                      src={
                        "https://image.tmdb.org/t/p/w300" +
                        (item?.poster_path || item?.profile_path)
                      }
                      alt={item?.title || item?.name}
                      loading="lazy"
                    />
                  ) : (
                    ""
                  )}
                  <div className="search-link">
                    <Link
                      to={`/${
                        item.media_type === "movie" ? "movies" : item.media_type
                      }/${item.id}`}
                    >
                      {item?.title || item?.name}
                    </Link>
                    <small>{item?.media_type}</small>
                  </div>
                </div>
              ))
            : ""}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
