function MovieDetail({
  medium_cover_image,
  title,
  year,
  rating,
  summary,
  genres,
}) {
  return (
    <div>
      <img src={medium_cover_image} alt={title}></img>
      <h2>{title}</h2>
      <h3>
        {year} (⭐{rating})
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieDetail;
