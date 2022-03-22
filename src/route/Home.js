import { useEffect, useState } from "react";
import Movie from "./component/Movie";


function Home (){
    
  const [ loading , setLoading ] = useState(true);

  const [ movies , setMovie ] = useState([]);
  const getMovie = async () => {
    const json = await (
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year` )
        ).json();
    
      setMovie(json.data.movies);
      setLoading(false);
      };
      console.log(movies);
      useEffect( () =>{
        getMovie();
      }, []);
    
  return (
    <div>
      <h1>Movie Web</h1>
      {loading ? 
        <h2>Loading....</h2> 
        : 
        
        <div>
          {movies.map( (movie) => (
            
            <Movie 
              key = {movie.id}
              medium_cover_image= {movie.medium_cover_image}
              title ={movie.title}
              year={movie.year} 
              rating={movie.rating} 
              summary ={movie.summary} 
              genres = {movie.genres} /> 
            ))
          }
        </div>
      }
      
    </div>
  );
}


export default Home;