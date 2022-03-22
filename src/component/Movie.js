import propTypes from "prop-types"

function Movie ({medium_cover_image , title ,year, rating, summary , genres}){

    return (
   
      <div>
        <img src={medium_cover_image} alt={title}></img>
        <h2>{title} </h2>
        <h3>{year} (⭐{rating})</h3>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => 
          (
          <li key ={g}>{g}</li> 
          ))}
        </ul>
      </div>
    )
}


Movie.propTypes = {
    medium_cover_image : propTypes.string.isRequired,
    title : propTypes.string.isRequired,
    year : propTypes.number,
    rating : propTypes.number,
    summary : propTypes.string.isRequired,
    genres : propTypes.arrayOf(propTypes.string)


}
export default Movie;