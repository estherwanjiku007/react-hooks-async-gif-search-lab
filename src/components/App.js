import React from "react";
import GifList from "./GifList";
import NavBar from "./NavBar";
import GifSearch from "./GifSearch";
import GifListContainer from "./GifListContainer";
// the App component should render out the GifListContainer component

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer/>
      
    </div>
  );
}

export default App;
