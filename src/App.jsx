import { Alert, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import { useEffect, useState } from "react";
import FavoriteMovies from "./components/FavoriteMovies";

function App() {
  const [movie, setMovie] = useState({});
  const [movieDataFav, setMovieDataFav] = useState(
    JSON.parse(localStorage.getItem("movieData")) || []
  );

  useEffect(() => {
    localStorage.setItem("movieData", JSON.stringify(movieDataFav));
  }, [movieDataFav]);

  // Remove movie from favorite list
  const handleRemoveBtnClick = (movieID) => {
    const updatedMovies = movieDataFav.filter(
      (movie) => movie.imdbID != movieID
    );
    setMovieDataFav(updatedMovies);
  };

  const errorWarning = "Please Search for a movie";

  return (
    <Container fluid>
      <Header />
      <SearchBar setMovie={setMovie} />

      <Row className="p-4">
        <Col
          xs={4}
          className="d-flex flex-column justify-center align-items-center"
        >
          {Object.keys(movie).length > 2 ? (
            <SearchResult
              movie={movie}
              movieDataFav={movieDataFav}
              setMovieDataFav={setMovieDataFav}
            />
          ) : (
            <Alert variant="warning">{movie.Error || errorWarning}</Alert>
          )}
        </Col>
        <Col xs={8}>
          <FavoriteMovies
            movieDataFav={movieDataFav}
            handleRemoveBtnClick={handleRemoveBtnClick}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
