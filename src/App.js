
import './App.css';
import { movies } from "./movies.js"
import MoviesLists from './MoviesList';
import AddModal from  './AddModal';
import Rate from  "./Rating";
import Search from "./Search";
import React, { useState} from 'react';


function App (){

  const [MoviesList , setMoviesList] = useState(movies);
  const[searchTitle ,setSearchTitle]= useState("");
  const [rateSearch, setRateSearch]=useState(0);

 const add = (newMovie) => {
  setMoviesList(

    MoviesList.concat(newMovie));

  };

    return (
    

    <div className= 'App'>
      <h1> Movie App </h1>
      <Search  movies ={MoviesList} searchTitle={searchTitle} rateSearch={rateSearch}/>
      
      <MoviesLists movies ={MoviesList} ssearchTitle={searchTitle} Rate  rateSearch={rateSearch}  />
    
      
    
     <AddModal AddMovie={add} movies ={MoviesList}/>
    
     <Rate setRateSearch={setRateSearch} rateSearch={rateSearch} />

  </div>
  
    );
    }
  

export default App;
