import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

const SearchBar = ({ setTerm }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTerm(query);
  };

  return (
    <>
      <div
        className="search-bar container-fluid pt-5 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(https://source.unsplash.com/${window.innerWidth}x${window.innerHeight})`,
        }}
      >
        <div className="row w-100">
          <form
            className="col-12 col-md-8 col-lg-6 offset-md-2 offset-lg-3"
            onSubmit={handleSubmit}
          >
            <div className="form-group d-flex">
              <input
                placeholder="Search"
                className="form-control rounded-0 rounded-start"
                value={query}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn btn-primary rounded-0 rounded-end"
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
