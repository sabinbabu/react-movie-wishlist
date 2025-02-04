/* eslint-disable react/prop-types */
import { Tab, Tabs } from "react-bootstrap";
import { filteredMovieGenre } from "../utility/filteredMovieGenre";
import TabMovieList from "./TabMovieList";

const FavoriteMovies = ({ movieDataFav, handleRemoveBtnClick }) => {
  const actionMovies = filteredMovieGenre(movieDataFav, "action");
  const comedyMovies = filteredMovieGenre(movieDataFav, "comedy");
  const romanticMovies = filteredMovieGenre(movieDataFav, "romantic");
  return (
    <>
      <h2>Favorite Movies</h2>
      <Tabs
        defaultActiveKey="all"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="all" title="All">
          <TabMovieList
            movieList={movieDataFav}
            handleRemoveBtnClick={handleRemoveBtnClick}
            genre=""
          />
        </Tab>
        <Tab eventKey="action" title="Action">
          <TabMovieList
            movieList={actionMovies}
            handleRemoveBtnClick={handleRemoveBtnClick}
            genre="action"
          />
        </Tab>
        <Tab eventKey="comedy" title="Comedy">
          <TabMovieList
            movieList={comedyMovies}
            handleRemoveBtnClick={handleRemoveBtnClick}
            genre="comedy"
          />
        </Tab>
        <Tab eventKey="romantic" title="Romantic">
          <TabMovieList
            movieList={romanticMovies}
            handleRemoveBtnClick={handleRemoveBtnClick}
            genre="romantic"
          />
        </Tab>
      </Tabs>
    </>
  );
};

export default FavoriteMovies;
