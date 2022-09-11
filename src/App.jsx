import { useEffect, useState } from "react";
import { GET2 } from "./utils/api.js";
import Navbar from "./components/Navbar/";
import Popular from "./components/Popular";
import MovieHome from "./components/MovieHome";
import TopRated from "./components/TopRated";
import Upcoming from "./components/Upcoming";
import "./App.scss";

function App() {
  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=a3e69b3b929b911d21793d43d1d96b7c";

  const [movies, setMovies] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    GET2("movie", "popular", "&language=en-US&page=1").then((data) =>
      setPopular(data.results)
    );
  }, []);

  useEffect(() => {
    GET2("movie", "top_rated", "&language=en-US&page=1").then((data) =>
      setTopRated(data.results)
    );
  }, []);
  useEffect(() => {
    GET2("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setUpcoming(data.results)
    );
  }, []);

  return (
    <div className="App">
      {/* <Navbar /> */}

      <MovieHome setSearchValue={setSearchValue} cardData={movies[0]} />
      <div className="PopularList__Title">
        <h1>Popular:</h1>
      </div>
      <div className="PopularList">
        {popular ? (
          popular.map((popular) => (
            <Popular key={popular.id} cardData={popular} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <div className="TopRatedList__Title">
        <h1>Top Rated:</h1>
      </div>

      <div className="TopRatedList">
        {topRated ? (
          topRated.map((topRated) => (
            <TopRated key={topRated.id} cardData={topRated} />
          ))
        ) : (
          <h1>Loagind...</h1>
        )}
      </div>
      <div className="UpcomingList__Title">
        <h1>Upcoming:</h1>
      </div>

      <div className="UpcomingList">
        {upcoming ? (
          upcoming.map((upcoming) => (
            <Upcoming key={upcoming.id} cardData={upcoming} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default App;
