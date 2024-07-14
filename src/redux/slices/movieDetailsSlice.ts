import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
} from "../../api/tmdb";

export const fetchMovieDetails = createAsyncThunk(
  "movieDetails/fetchMovieDetails",
  async (id: string) => {
    const response = await getMovieDetails(id);
    return response.data;
  }
);

export const fetchMovieCredits = createAsyncThunk(
  "movieDetails/fetchMovieCredits",
  async (id: string) => {
    const response = await getMovieCredits(id);
    return response.data.cast;
  }
);

export const fetchMovieReviews = createAsyncThunk(
  "movieDetails/fetchMovieReviews",
  async (id: string) => {
    const response = await getMovieReviews(id);
    return response.data.results;
  }
);

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState: {
    details: null,
    cast: [],
    reviews: [],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.details = action.payload;
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        state.cast = action.payload;
      })
      .addCase(fetchMovieReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  },
});

export default movieDetailsSlice.reducer;
