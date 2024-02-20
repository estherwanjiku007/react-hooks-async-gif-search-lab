import { useState } from "react";
import React  from "react";
 function  GifSearch({handleSearch,filteredGifs}){
  //  console.log(handleSearch)
  const color="green"
  //const myColor="white"
    const [myTerm,setMyTerm]=useState("")
    function handleChange(event){
        const value=event.target.value
        setMyTerm(value)
    }
    function handleSubmit(event){
        event.preventDefault()
        handleSearch(myTerm)
        
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="search">Enter a Search Term</label>
              <input type="text" value={myTerm} id="search" 
             onChange={handleChange} />
              </form>
              <button type="submit" style={{background:color,fontWeight:23}} >Find Gifs</button>
              {filteredGifs.map((gif)=>(
                {gif}
              ))}
        </div>
    )
}
export default GifSearch