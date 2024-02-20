import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";
 function GifListContainer(){
    const [myGif,setMyGif]=useState([])
    const [theTerm,setTheTerm]=useState('')
    useEffect(()=>{
        fetchData()
    },[])
 async  function fetchData(){
        try { 
            const response = await fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=4FE5419T4ddxoykYcMFMiHM4ZxfFJKpA")
            const myData=await response.json()
            if(myData.ok){
            setMyGif(myData)
           // console.log(myGif)
            }
            else{
                console.log("Failed to set",myData.data.original)
            }
        }
         catch (error) {
             console.log("Failed to fetch",error.statusText)
        }
            }
            console.log(myGif)  
    const handleSearch=(searchValue)=>{
 setTheTerm(searchValue)
    }
    const filteredGifs=myGif.filter((gif)=>
    gif.title.toLowerCase().includes(theTerm.toLowerCase)
    )
    
    return(
        <div>
            <GifList theGif={myGif}/>
            <GifSearch handleSearch={handleSearch} filteredGifs={filteredGifs} />
        </div>
    ) 
    
}
export default GifListContainer