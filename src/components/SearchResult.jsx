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
      <h2>Search Result</h2>
      <MovieCard movie={movie} />
      {/* Button to add to wishlist */}
      <Stack direction="horizontal" gap={4} className="mt-2">
        <Form.Select
          ref={selectRef}
          aria-label="Select genre"
          style={{ width: "20rem" }}
        >
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
