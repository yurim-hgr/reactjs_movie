import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail () {
    const [ loading , setLoading ] = useState(true);

    const [ movies , setMovie ] = useState([]);
    const {id} = useParams();
    
    const getMovie = async () =>{
        const json = await(
            await(fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            ).json();
            
            setMovie(json.data.movie);
            setLoading(false);
            console.log(movies);
    };
    useEffect( () => {
        getMovie();
    }, []);
    
    return (
         
        <div>
            {loading ? 
            <h2>Loading....</h2> 
            : 
            
            <div>
                           
                <div>
                    <img src={movies.medium_cover_image} alt={movies.title}></img>
                    <h2>
                        {movies.title}
                    </h2>
                    <h3>{movies.year} (⭐{movies.rating})</h3>
                    <p>{movies.summary}</p>
                    <ul>
                        {movies.genres.map((g) => 
                        (
                            <li key ={g}>{g}</li> 
                        ))}
                    </ul>
                </div> 
                
              
            </div>
          }
        </div>
        )
};

export default Detail;