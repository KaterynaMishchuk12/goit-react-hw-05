import axios from "axios";

const API_KEY = "6c0a8ac743fa4cbf26014e8e3858a28f";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
// axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`;

export const fetchMovies = async (query) => {
  const url = `/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const options = {
    params: {
      api_key: API_KEY,
    },
  };

  try {
    const response = await axios.get(url, options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
