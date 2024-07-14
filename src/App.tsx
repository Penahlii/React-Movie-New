import React from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import Navigation from "./components/Navigation/Navigation";
import HomePage from "./pages/HomePage/HomePage";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route component={NotFoundPage} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
