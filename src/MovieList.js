
import React, { useState} from 'react';
function MovieCard (){
    
const [Tabmovies, setTabmovies] = useState([
            {imag :"/jocker.jpg",title:1, description:'item1', posterURL: 'URL', rating : '****' },
            {imag:"/titanic.jpg",title:2, description:'item2', posterURL: 'URL', rating : '****' },
            {imag:"/transporteur.jpg",title:3, description:'item3', posterURL: 'URL', rating : '****' },
])
        return(

            <div>
<h1>Movie App</h1>
<img  style={{borderRadius: "50%",
  border:"solid 5px pink",
  width: "250px",
  height: "250px"}} src="Tabmovies.imag" alt="image"></img>
  <ul>{Tabmovies.map((elm,i) => (
            <li key={i}>
                <img src={Tabmovies.imag}/>
                <span> {Tabmovies.title} </span>
                <span> {Tabmovies.description} </span>
                <span> {Tabmovies.posterURL} </span>
                <span> {Tabmovies.rating } </span>
            </li>
      ))}
      </ul>   
    </div>
    );
  }
  export default MovieCard;