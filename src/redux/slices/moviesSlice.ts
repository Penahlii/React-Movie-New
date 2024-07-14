import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrendingMovies, searchMovies } from "../../api/tmdb";

export const fetchTrendingMovies = createAsyncThunk(
  "movies/fetchTrendingMovies",
  async () => {
    const response = await getTrendingMovies();
    return response.data.results;
  }
);

export const fetchMoviesBySearch = createAsyncThunk(
  "movies/fetchMoviesBySearch",
  async (query: string) => {
    const response = await searchMovies(query);
    return response.data.results;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    trending: [],
    searchResults: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trending = action.payload;
      })
      .addCase(fetchMoviesBySearch.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      });
  },
});

export default moviesSlice.reducer;
