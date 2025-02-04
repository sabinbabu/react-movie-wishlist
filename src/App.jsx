import { Alert, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import { useEffect, useRef, useState } from "react";
import FavoriteMovies from "./components/FavoriteMovies";

function App() {
  const [movie, setMovie] = useState({});
  const [movieDataFav, setMovieDataFav] = useState(
    JSON.parse(localStorage.getItem("movieData")) || []
  );

  useEffect(() => {
    localStorage.setItem("movieData", JSON.stringify(movieDataFav));
  }, [movieDataFav]);

  const selectRef = useRef(null);
  // Add movie to favorite list
  const handleOnFavBtnClick = () => {
    // check if movie is already a favorite
    if (!movieDataFav.some((favMovie) => favMovie.imdbID === movie.imdbID)) {
      const movieObject = { ...movie, genre: selectRef.current.value };
      setMovieDataFav((prevMovies) => [...prevMovies, movieObject]);
      selectRef.current.value = "Select genre";
    }
  };

  // Remove movie from favorite list
  const handleRemoveBtnClick = (movieID) => {
    const updatedMovies = movieDataFav.filter(
      (movie) => movie.imdbID != movieID
    );
    setMovieDataFav(updatedMovies);
  };

  return (
    <Container fluid>
      <Header />
      <SearchBar setMovie={setMovie} />

      <Row className="p-4">
        <Col
          xs={4}
          className="d-flex flex-column justify-center align-items-center"
        >
          {Object.keys(movie).length ? (
            <SearchResult
              movie={movie}
              handleOnFavBtnClick={handleOnFavBtnClick}
              selectRef={selectRef}
            />
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
  );
}

export default App;
