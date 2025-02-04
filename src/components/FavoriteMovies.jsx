/* eslint-disable react/prop-types */
import { Stack, Tab, Tabs } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { filteredMovieGenre } from "../utility/filteredMovieGenre";

const FavoriteMovies = ({ movieDataFav }) => {
  const actionMovies = filteredMovieGenre(movieDataFav, "action");
  const comedyMovies = filteredMovieGenre(movieDataFav, "comedy");
  const romanticMovies = filteredMovieGenre(movieDataFav, "romantic");
  return (
    <>
      <h2>Favorite Movies</h2>
      <Tabs
        defaultActiveKey="all"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="All">
          <Stack direction="horizontal">
            {movieDataFav.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </Stack>
        </Tab>
        <Tab eventKey="action" title="Action">
          <Stack direction="horizontal">
            {actionMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </Stack>
        </Tab>
        <Tab eventKey="comedy" title="Comedy">
          <Stack direction="horizontal">
            {comedyMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </Stack>
        </Tab>
        <Tab eventKey="romantic" title="Romantic">
          <Stack direction="horizontal">
            {romanticMovies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </Stack>
        </Tab>
      </Tabs>
    </>
  );
};

export default FavoriteMovies;
