import React,{useState} from 'react';
import App from './App';
import { Movies } from "./movies.js"
import Description from './Descrption';
import {Route} from "react-router-dom"




const Home =() =>{

    const [MoviesList , setMoviesList] = useState(Movies);
    const[searchTitle ,setSearchTitle]= useState("");
    const [rateSearch, setRateSearch]=useState(1);
  
  
    const addNewMovie = (e,newMovie) => {
      e.preventDefault()
      setMoviesList([...MoviesList, newMovie]);
    };
    
return (
    <div>
    <Route exact path="/" render={()=><App MoviesList={MoviesList} addNewMovie={addNewMovie} searchTitle={searchTitle} setSearchTitle={setSearchTitle} setRateSearch={setRateSearch} rateSearch={rateSearch}/>} />
    <Route  path="/Description/:MoviesListId"  render={(props) => <Description {...props} MoviesList={MoviesList} />} />
    </div>)
    };
    export default Home;
