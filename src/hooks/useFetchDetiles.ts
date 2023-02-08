import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TMDBApi } from "../services/TMDBApi";
const api = new TMDBApi();
export const useFetchDetails = (): any => {
  const [data, setData] = useState();
  const { endpoint, movieId } = useParams();
  console.log(endpoint);
  console.log(movieId);
  useEffect(() => {
    switch (endpoint) {
      case "movie":
        api.feathMovieById(movieId || "").then(setData);
        break;
      case "tv-shows":
        api.feathTVById(movieId || "").then(setData);
        break;
    }
  }, [movieId, endpoint]);

  return { type: endpoint, data };
};
