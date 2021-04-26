
import React from 'react';
import Rate from "./Rating";

const Search= ({searchTitle,setRateSearch,rateSearch }) => {
    
    return (

        <div>

<input Type="text" placeholder="Searching" onChange={(e) =>searchTitle(e.target.value)}/>

<button className= "search-Button" onClick={()=> searchTitle(searchTitle)}>Search</button>


<Rate setRateSearch={setRateSearch} rateSearch={rateSearch} />
</div>
    );
}
  

export default Search ;