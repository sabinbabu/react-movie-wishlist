import { useRef } from "react";
import { Button, Form, Stack } from "react-bootstrap";
import axios from "axios";

const SearchBar = () => {
  const MOVIE_API_KEY = "1c0b5c6b";
  const API_URL = `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&t=`;
  const searchRef = useRef(null);
  const searchedQuery = searchRef.current.value;
  //   Handles on click event
  const handleOnClick = async () => {
    try {
      const response = await axios.get(API_URL + searchedQuery);
      searchRef.current.value = "";
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Stack direction="horizontal">
        <Form.Control type="email" placeholder="Enter email" ref={searchRef} />
        <Button onClick={handleOnClick}>Search</Button>
      </Stack>
    </>
  );
};

export default SearchBar;
