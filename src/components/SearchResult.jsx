/* eslint-disable react/prop-types */
import { Button, Form, Stack } from "react-bootstrap";
import MovieCard from "./MovieCard";

const SearchResult = (props) => {
  const { movie, handleOnFavBtnClick, selectRef } = props;

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
        <Button onClick={handleOnFavBtnClick} variant="primary">
          Add to Fav
        </Button>
      </Stack>
    </>
  );
};
export default SearchResult;
