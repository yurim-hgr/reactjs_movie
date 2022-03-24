import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../component/MovieDetail";

function Detail() {
  const [loading, setLoading] = useState(true);

  const [movies, setMovie] = useState([]);
  const { id } = useParams();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
    console.log(movies);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Loading....</h2>
      ) : (
        <MovieDetail
          key={movies.id}
          id={movies.id}
          medium_cover_image={movies.medium_cover_image}
          title={movies.title}
          year={movies.year}
          rating={movies.rating}
          summary={movies.summary}
          genres={movies.genres}
        />
      )}
    </div>
  );
}

export default Detail;
