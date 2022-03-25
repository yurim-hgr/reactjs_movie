import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../component/Loading";
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
        <Loading />
      ) : (
        <MovieDetail
          key={movies.id}
          id={movies.id}
          coverImg={movies.medium_cover_image}
          rating={movies.rating}
          runtime={movies.runtime}
          description_full={movies.description_full}
          background_image_original={movies.background_image_original}
          title={movies.title}
          genres={movies.genres}
          style_tag="Detail"
        />
      )}
    </div>
  );
}

export default Detail;
