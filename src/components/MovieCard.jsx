/* eslint-disable react/prop-types */
import { Badge, Button, Card } from "react-bootstrap";

const MovieCard = ({ movie, handleRemoveBtnClick }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>{movie.Plot}</Card.Text>
        <Card.Text>
          {movie.Actors?.split(",").map((actor) => (
            <Badge bg="danger" key={movie.imdbID}>
              {actor}
            </Badge>
          ))}
        </Card.Text>

        {movie.genre && (
          <Button
            onClick={() => handleRemoveBtnClick(movie.imdbID)}
            variant="outline-danger"
          >
            Remove
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
