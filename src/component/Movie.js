import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({
  id,
  medium_cover_image,
  title,
  year,
  rating,
  summary,
  genres,
}) {
  return (
    <div className={styles.movie}>
      <Link to={`/movie/${id}`}>
        <img
          className={styles.movie__img}
          src={medium_cover_image}
          alt={title}
        ></img>
      </Link>
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>
            {title.length > 30 ? `${title.slice(0, 30)}...` : title}
          </Link>
        </h2>
        <h3 className={styles.movie__year}>
          {year} (⭐{rating})
        </h3>
        <ul className={styles.movie__genres}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  medium_cover_image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  year: propTypes.number,
  rating: propTypes.number,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string),
};

export default Movie;
