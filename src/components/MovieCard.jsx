/* eslint-disable react/prop-types */
import { Badge, Button, Card } from "react-bootstrap";

const MovieCard = ({ movie, handleRemoveBtnClick }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.Poster} style={{ height: "13rem" }} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text style={{ height: "9rem", overflow: "scroll" }}>
          {movie.Plot}
        </Card.Text>
        <Card.Text>
          {movie.Actors?.split(",").map((actor) => (
            <Badge className="mx-1" bg="danger" key={movie.imdbID}>
              {actor}
            </Badge>
          ))}
        </Card.Text>
      </Card.Body>
      {movie.genre && (
        <Button
          className="ms-auto m-3"
          onClick={() => handleRemoveBtnClick(movie.imdbID)}
          variant="outline-danger"
        >
          Remove
        </Button>
      )}
    </Card>
  );
};

export default MovieCard;
