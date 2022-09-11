import "./index.scss";

const Upcoming = ({ cardData }) => {
  const { title, poster_path, overview } = cardData;
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="Upcoming" id="upcoming">
      <div className="MainUpcomingCard">
        <h1 className="MainUpcomingInfo__title">{title}</h1>
        <div className="MainUpcomingInfo">
          {/* <p className="MainUpcoming__Info__description">{overview}</p> */}
          <div className="MainUpcomingImgCard">
            <img
              className="MainUpcomingImg"
              src={API_IMG + poster_path}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
