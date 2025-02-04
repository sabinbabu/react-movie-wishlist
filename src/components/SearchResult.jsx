/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";

const SearchResult = (props) => {
  const { movie, setMovieDataFav } = props;
  const selectRef = useRef(null);
  const handleOnClick = () => {
    const movieObject = { ...movie, genre: selectRef.current.value };
    setMovieDataFav((prevMovies) => [...prevMovies, movieObject]);
    selectRef.current.value = "Select genre";
  };
  return (
    <>
      <MovieCard movie={movie} />
      <Stack direction="horizontal" style={{ width: "18rem" }}>
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
    </>
  );
};
export default SearchResult;
