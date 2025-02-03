/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Button, Container, Form, Stack } from "react-bootstrap";
import axios from "axios";

const SearchBar = (props) => {
  const MOVIE_API_KEY = "1c0b5c6b";
  const API_URL = `http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&t=`;
  const searchRef = useRef(null);
  const { setMovie } = props;
  //   Handles on click event
  const handleOnClick = async () => {
    try {
      const searchedQuery = searchRef.current.value;

      const response = await axios.get(API_URL + searchedQuery);
      searchRef.current.value = "";
      setMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <Stack direction="horizontal">
        <Form.Control type="email" placeholder="Enter email" ref={searchRef} />
        <Button onClick={handleOnClick}>Search</Button>
      </Stack>
    </Container>
  );
};

export default SearchBar;
