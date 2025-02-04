import { Col, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import { useState } from "react";
import FavoriteMovies from "./components/FavoriteMovies";

function App() {
  const [movie, setMovie] = useState({});
  const [movieDataFav, setMovieDataFav] = useState([]);
  console.log("movieDataFav", movieDataFav);

  return (
    <>
      <Header />
      <SearchBar setMovie={setMovie} />
      <Row>
        <Col xs={4}>
          <SearchResult movie={movie} setMovieDataFav={setMovieDataFav} />
        </Col>
        <Col xs={8}>
          <FavoriteMovies movieDataFav={movieDataFav} />
        </Col>
      </Row>
    </>
  );
}

export default App;
