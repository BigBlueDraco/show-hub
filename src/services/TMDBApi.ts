import axios from "axios";
export class TMDBApi {
  private BASE_URL = "https://api.themoviedb.org/3/";
  private API_KEY = "fd0a7baec7e1722e7549dfbeea65227f";

  public async featheTopRateMovies() {
    const res = await axios.get(`movie/top_rated`, {
      baseURL: this.BASE_URL,
      params: {
        api_key: this.API_KEY,
      },
    });
    return await res.data;
  }
  public async featheTopRateTVs() {
    const res = await axios.get(`/tv/top_rated`, {
      baseURL: this.BASE_URL,
      params: {
        api_key: this.API_KEY,
      },
    });
    return await res.data;
  }
}
