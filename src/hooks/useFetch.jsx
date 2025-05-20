import { useEffect, useState } from "react";
import { baseURL, options } from "../services/api";

export default function useFetch(link) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`${baseURL}${link}`, options);

        if (!res.ok) {
          throw new Error("Can not get data.");
        }

        const json = await res.json();
        setData(json);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [link]);

  return { data };
}
