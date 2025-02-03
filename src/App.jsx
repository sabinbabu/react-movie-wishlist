import { Col, Row } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResult from "./components/SearchResult";
import { useState } from "react";

function App() {
  const [movie, setMovie] = useState({});
  const [movieDataFav, setMovieDataFav] = useState([]);
  console.log(movieDataFav);

  return (
    <h1>
      <Header />
      <SearchBar setMovie={setMovie} />
      <Row>
        <Col xs={4}>
          <SearchResult movie={movie} setMovieDataFav={setMovieDataFav} />
        </Col>
        <Col xs={8}></Col>
      </Row>
    </h1>
  );
}

export default App;
