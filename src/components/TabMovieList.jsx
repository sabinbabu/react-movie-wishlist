import { Alert, Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

/* eslint-disable react/prop-types */
const TabMovieList = ({ movieList, handleRemoveBtnClick, genre }) => {
  const emptyMessage = genre;
  return (
    <>
      {!!movieList.length && (
        <Row>
          {movieList.map((movie) => (
            <Col key={movie.imdbID}>
              <MovieCard
                movie={movie}
                handleRemoveBtnClick={handleRemoveBtnClick}
              />
            </Col>
          ))}
        </Row>
      )}

      {!movieList.length && (
        <Alert variant="light">
          {" "}
          Please add {emptyMessage} movie to favorite
        </Alert>
      )}
    </>
  );
};

export default TabMovieList;
