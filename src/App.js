import React from 'react';
import {useEffect,useState} from 'react';
import './App.css';
import "./MovieCard.jsx"
import MovieCard from './MovieCard.jsx';

const App = () => {
// api key 11d51edb

const [movies, setMovies] = useState([])
const [searchTerm, setSearchTerm] = useState("")
const API_URL = "http://www.omdbapi.com?apikey=11d51edb3"

const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);
}

const movie1= {
        "Title": "Batman v Superman: Dawn of Justice",
        "Year": "2016",
        "imdbID": "tt2975590",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTJkYjdmYjYtOGMyNC00ZGU1LThkY2ItYTc1OTVlMmE2YWY1XkEyXkFqcGc@._V1_SX300.jpg"

}

useEffect(() => {
    searchMovies('Superman')

}, [])
    return (
        <div className="app"> 
            <h1>MovieEmporium</h1>

              <div className = "search">
                <input placeholder="Search for movies" value={searchTerm} onChange ={(e) => setSearchTerm(e.target.value)}>
                
                
                </input>
                <img src="https://freeiconshop.com/wp-content/uploads/edd/search-outline-filled.png" alt="search" onClick={() => searchMovies(searchTerm)}></img>
               </div>

               {
                movies?.length>0
                ? (
                    <div className="container">
                        {movies.map((movie) =>
                        <MovieCard movie = {movie}/>
                        
                        )}
                     </div>
                ) :
                (
                    <div className="empty">
                    <h2>No Movies Found</h2>
                    
                    </div>)
               }
        
        <div className="container">
                

               </div>
 </div>

 
);
}


export default App
