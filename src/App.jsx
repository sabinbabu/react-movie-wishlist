import { Alert, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import { useState } from "react";
import FavoriteMovies from "./components/FavoriteMovies";

function App() {
  const [movie, setMovie] = useState({});
  const [movieDataFav, setMovieDataFav] = useState([]);

  // Remove movie from favorite list
  const handleRemoveBtnClick = (movieID) => {
    const updatedMovies = movieDataFav.filter(
      (movie) => movie.imdbID != movieID
    );
    setMovieDataFav(updatedMovies);
  };

  return (
    <>
      <Header />
      <SearchBar setMovie={setMovie} />
      <Container fluid>
        <Row>
          <Col xs={4}>
            {Object.keys(movie).length ? (
              <SearchResult movie={movie} setMovieDataFav={setMovieDataFav} />
            ) : (
              <Alert variant="warning"> Please Search for a movie</Alert>
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
    </>
  );
}

export default App;
