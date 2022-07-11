import React from "react";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//components
import Header from "./components/Header/";
import SearchBar from "./components/SearchBar/";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
    </div>
  );
};

export default App;
