const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=a3e69b3b929b911d21793d43d1d96b7c";

const API_SEARCH =
  "https://api.themoviedb.org/3/search/movie?api_key=a3e69b3b929b911d21793d43d1d96b7c&query=";

const GET = async (query, ext = "") => {
  const res = await fetch(API_SEARCH + query + ext);
  return await res.json();
};

const GET2 = async (type, specific, ext = "") => {
  const res = await fetch(BASE_URL + type + "/" + specific + API_KEY + ext);
  return await res.json();
};

export { GET, GET2 };

//https://api.themoviedb.org/3/movie/upcoming?api_key=a3e69b3b929b911d21793d43d1d96b7c&language=en-US&page=1

//API PER GENERE IN VISTA DI HALLOWEEN
//type=genre
//specific=movie
//+"list?"
//+API_KEY
//+ext

//https://api.themoviedb.org/3/genre/movie/list?api_key=a3e69b3b929b911d21793d43d1d96b7c&language=en-US

{
  /* {movies.map((moviePippo) => (
        <Popular key={moviePippo.id} {...moviePippo} />
      ))} */
}

// searched.results.map((movie) => (
//   <div className="MainMovieCard">
//     <div className="MainMovieCard__info">
//       <h1>{movie.title}</h1>
//       <p>{movie.overview}</p>
//     </div>
//     <div className="MainMovieCard__img">
//       <img src={API_IMG + movie.poster_path} alt={title} />
//     </div>
//   </div>
// ));
