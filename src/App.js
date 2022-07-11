import React, { useState } from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//components
import Header from "./components/Header/";
import SearchBar from "./components/SearchBar/";
import ImagesList from "./components/ImagesList/";

const App = () => {
  const [term, setTerm] = useState("something");

  return (
    <div className="App">
      <Header />
      <SearchBar setTerm={setTerm} />
      <p className="display-1 text-center">{term}</p>
      <ImagesList term={term} />
    </div>
  );
};

export default App;
