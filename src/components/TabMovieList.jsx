import { Alert, Col, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";

/* eslint-disable react/prop-types */
const TabMovieList = ({ movieList, handleRemoveBtnClick, genre }) => {
  const emptyMessage = genre;
  return (
    <div className="overflow-auto" style={{ height: "68vh" }}>
      {!!movieList.length && (
        <Row>
          {movieList.map((movie) => (
            <Col className="mt-4" key={movie.imdbID}>
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
    </div>
  );
};

export default TabMovieList;
