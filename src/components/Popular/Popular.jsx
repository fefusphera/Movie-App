import "./index.scss";

const Popular = ({ cardData }) => {
  const { title, poster_path, overview } = cardData;
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="Popular" id="most-popular">
      <div className="MainPopularCard">
        <h1 className="MainPopularInfo__title">{title}</h1>
        <div className="MainPopularInfo">
          {/* <p className="MainPopularInfo__description">{overview}</p> */}
          <div className="MainPopularImgCard">
            <img
              className="MainPopularImg"
              src={API_IMG + poster_path}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
