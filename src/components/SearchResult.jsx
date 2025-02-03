/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Badge, Button, Card, Form, Stack } from "react-bootstrap";

const SearchResult = (props) => {
  const { movie, setMovieDataFav } = props;
  const selectRef = useRef(null);
  const handleOnClick = () => {
    const movieObject = { ...movie, genre: selectRef.current.value };
    setMovieDataFav((prevMovies) => [...prevMovies, movieObject]);
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movie.Poster} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Plot}</Card.Text>
          {movie.Actors?.split(",").map((actor) => (
            <Badge bg="danger" key={movie.imdbID}>
              {actor}
            </Badge>
          ))}
          <Stack direction="horizontal">
            <Form.Select ref={selectRef} aria-label="Select genre">
              <option>Select genre</option>
              <option value="action">Action</option>
              <option value="comedy">Comedy</option>
              <option value="romantic">Romantic</option>
            </Form.Select>
            <Button onClick={handleOnClick} variant="primary">
              Add to Fav
            </Button>
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};
export default SearchResult;
