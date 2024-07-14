import axios from "axios";

const API_KEY = "YOUR KEY";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const getTrendingMovies = () => api.get("/trending/movie/day");
export const searchMovies = (query: string) =>
  api.get(`/search/movie?query=${query}`);
export const getMovieDetails = (id: string) => api.get(`/movie/${id}`);
export const getMovieCredits = (id: string) => api.get(`/movie/${id}/credits`);
export const getMovieReviews = (id: string) => api.get(`/movie/${id}/reviews`);
