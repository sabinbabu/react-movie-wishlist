/* eslint-disable react/prop-types */
import { Alert, Button, Form, Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";
import { useRef, useState } from "react";

const SearchResult = (props) => {
  const { movie, movieDataFav, setMovieDataFav } = props;
  const selectRef = useRef(null);
  const [isGenreSelected, setIsGenreSelected] = useState();

  // Check if added movie is in fav movie list
  const doMovieExists = () => {
    return movieDataFav.some((favMovie) => favMovie.imdbID === movie.imdbID);
  };

  // Add movie to favorite list
  const handleOnFavBtnClick = () => {
    if (selectRef.current.value !== "Select genre") {
      setIsGenreSelected(false);
      const movieObject = { ...movie, genre: selectRef.current.value };
      setMovieDataFav((prevMovies) => [...prevMovies, movieObject]);
      selectRef.current.value = "Select genre";
    } else {
      setIsGenreSelected(true);
    }
  };

  return (
    <>
      <h2>Search Result</h2>
      <MovieCard movie={movie} />
      {/* Button to add to wishlist */}
      {isGenreSelected && (
        <Alert className="me-auto m-2" variant="danger">
          Please select a genre
        </Alert>
      )}
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
        <Button
          onClick={handleOnFavBtnClick}
          variant="primary"
          disabled={doMovieExists()}
        >
          Add to Fav
        </Button>
      </Stack>
    </>
  );
};
export default SearchResult;
