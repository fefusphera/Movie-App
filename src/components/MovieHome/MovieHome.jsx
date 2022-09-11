import { useState, useEffect } from "react";
import { GET } from "../../utils/api";
import "./index.scss";

const MovieHome = ({
  query,
  ext,
  setSearchValue,
  cardData = { title: "", poster_path: "", overview: "" },
}) => {
  const { title, poster_path, overview } = cardData;
  const [inputValue, setInputValue] = useState("coco");
  const [searched, setSearched] = useState([]);

  const API_IMG = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    if (inputValue !== "") {
      GET(inputValue, "&language=en-US&page=1").then((data) => {
        console.log(data);
        setSearched(data.results);
      });
    }
  }, [inputValue]);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setInputValue(e.target[0].value);
    setSearchValue(inputValue);
  };

  console.log("SEARCHED>>>>", searched[0]);

  return (
    <div className="MainMovieHome" id="search">
      <div className="searchMovieForm">
        <form className="MainInputForm" onSubmit={onHandleSubmit}>
          <input type="text" />
          <button className="FormBtn" type="submit">
            Search
          </button>
        </form>
      </div>

      {searched.length > 0 && (
        <div className="MainMovieCard">
          <div className="MainMovieCard__info">
            <h1 className="MainMovieCard__title">{searched[0].title}</h1>
            <p className="MainMovieCard__description">{searched[0].overview}</p>
          </div>
          <div className="MainMovieCardImageDiv">
            <img
              className="MainMovieCard__img"
              src={API_IMG + searched[0].poster_path}
              alt={title}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieHome;
