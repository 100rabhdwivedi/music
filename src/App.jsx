import React from "react";
import Nav from "./components/Nav.jsx";
import Music from "./components/Music";
function App(){
  return (
    <div className="h-screen w-full bg-zinc-300 ">
    <Nav/>
    <div className="flex gap-5 flex-wrap justify-evenly ">
    <Music />
    <Music />
    <Music />
    <Music />
    <Music />
    <Music />
    </div>
    </div>
  );
}

export default App;