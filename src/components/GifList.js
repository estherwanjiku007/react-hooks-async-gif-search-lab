import React from "react";
export default function GifList({theGif}){
  //  console.log(theGif)
     return(
        <div>
            {theGif.map((gif,index)=>(
                <ul key={index}>
                    <li><img src={gif}/></li>
                </ul>
            ))}
        </div>
     )
}