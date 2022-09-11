import "./index.scss";

const TopRated = ({ cardData }) => {
  const { title, poster_path, overview } = cardData;
  const API_IMG = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="TopRated" id="top-rated">
      <div className="TopRatedCard">
        <h1 className="TopRated__Title">{title}</h1>
        <div className="TopRated__Info">
          {/* <p>{overview}</p> */}
          <div className="TopRated__Card">
            <img
              className="TopRated__Img"
              src={API_IMG + poster_path}
              alt={title}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRated;

//https://api.themoviedb.org/3/movie/upcoming?api_key=a3e69b3b929b911d21793d43d1d96b7c&language=en-US&page=1

// const GET2 = async (type, specific, ext = "") => {
//   const res = await fetch(BASE_URL + type + "/" + specific + API_KEY + ext);
//   return await res.json();
// };
